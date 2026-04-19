import { useState, useRef, useEffect } from 'react'
import {
  collection, getDocs, query, where, orderBy, limit,
  doc, updateDoc, getDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import Nav from '../components/Nav'
import TopBar from '../components/TopBar'
import styles from './Councillor.module.css'
import { maybePartnershipId, partnerNickname } from '../utils/partnership'

interface ChatMsg {
  role: 'user' | 'model'
  text: string
}

async function buildContext(pid: string, uid: string): Promise<string> {
  const parts: string[] = []

  // Last 20 messages (must query sent + received separately — Firestore OR not allowed on different fields)
  const [sentSnap, recvSnap] = await Promise.all([
    getDocs(query(collection(db, 'messages'), where('fromUid', '==', uid), orderBy('sentAt', 'desc'), limit(10))),
    getDocs(query(collection(db, 'messages'), where('toUid', '==', uid), orderBy('sentAt', 'desc'), limit(10))),
  ])
  const allMsgs = [...sentSnap.docs, ...recvSnap.docs]
    .map(d => d.data())
    .sort((a, b) => ((a.sentAt?.seconds ?? 0) as number) - ((b.sentAt?.seconds ?? 0) as number))
    .slice(-20)
  const msgs = allMsgs.map(m => `[${(m.fromUid as string) === uid ? 'Me' : 'Partner'}]: ${m.text as string}`)
  if (msgs.length) parts.push(`Recent messages:\n${msgs.join('\n')}`)

  // Goals
  const goalsSnap = await getDocs(collection(db, 'partnerships', pid, 'goals'))
  const goals = goalsSnap.docs.map(d => {
    const g = d.data()
    return `${g.title as string} (${g.status as string})`
  })
  if (goals.length) parts.push(`Goals: ${goals.join(', ')}`)

  // Checklist
  const checkSnap = await getDocs(collection(db, 'checklists', pid, 'items'))
  const checks = checkSnap.docs.map(d => {
    const c = d.data()
    return `${c.text as string} [${c.checked ? 'done' : 'pending'}]`
  })
  if (checks.length) parts.push(`Shared checklist: ${checks.join(', ')}`)

  // Panic doc
  const panicSnap = await getDoc(doc(db, 'panics', pid))
  if (panicSnap.exists()) {
    const p = panicSnap.data()
    if (p?.triggerCount) parts.push(`Panic button has been triggered ${p.triggerCount as number} times`)
  }

  // Important dates
  const datesSnap = await getDocs(collection(db, 'partnerships', pid, 'dates'))
  const importantDates = datesSnap.docs.map(d => {
    const dt = d.data()
    return `${dt.label as string} on ${dt.date as string}`
  })
  if (importantDates.length) parts.push(`Important dates: ${importantDates.join(', ')}`)

  return parts.join('\n\n')
}

export default function Councillor() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = maybePartnershipId(user?.uid, userData?.partnerId as string | undefined)
  const nickname = partnerNickname(userData, partnerData)

  const [apiKey, setApiKey] = useState<string>((userData?.geminiKey as string | undefined) ?? '')
  const [keyInput, setKeyInput] = useState('')
  const [savingKey, setSavingKey] = useState(false)

  const [messages, setMessages] = useState<ChatMsg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<{ role: string; parts: { text: string }[] }[]>([])
  const bottomRef = useRef<HTMLDivElement>(null)

  // Sync api key from userData when loaded
  useEffect(() => {
    if (userData?.geminiKey && !apiKey) {
      setApiKey(userData.geminiKey as string)
    }
  }, [userData])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const saveKey = async () => {
    if (!user?.uid || !keyInput.trim()) return
    setSavingKey(true)
    await updateDoc(doc(db, 'users', user.uid), { geminiKey: keyInput.trim() })
    setApiKey(keyInput.trim())
    setKeyInput('')
    setSavingKey(false)
  }

  const send = async () => {
    if (!input.trim() || !apiKey || !user?.uid || !pid) return
    const userText = input.trim()
    setInput('')
    setLoading(true)

    const userMsg: ChatMsg = { role: 'user', text: userText }
    setMessages(prev => [...prev, userMsg])

    try {
      const context = history.length === 0
        ? await buildContext(pid, user.uid)
        : ''

      const systemPrompt = history.length === 0
        ? `You are a warm, supportive relationship counsellor for a couple using the Seekship app. One partner is "${user.displayName ?? 'me'}" and the other is "${nickname}". Be constructive, non-judgmental, and practical. Keep responses concise (under 200 words). Here is recent data about their relationship:\n\n${context}\n\nNow answer their question:`
        : userText

      const newTurn = { role: 'user', parts: [{ text: history.length === 0 ? `${systemPrompt}\n\n${userText}` : userText }] }
      const updatedHistory = [...history, newTurn]

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: updatedHistory }),
        }
      )

      if (!res.ok) {
        const err = await res.json() as { error?: { message?: string } }
        throw new Error(err.error?.message ?? `API error ${res.status}`)
      }

      const data = await res.json() as {
        candidates?: { content?: { parts?: { text?: string }[] } }[]
      }
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No response.'

      const modelTurn = { role: 'model', parts: [{ text: reply }] }
      setHistory([...updatedHistory, modelTurn])
      setMessages(prev => [...prev, { role: 'model', text: reply }])
    } catch (e) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: `Error: ${e instanceof Error ? e.message : 'Something went wrong.'}`,
      }])
    }

    setLoading(false)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void send()
    }
  }

  if (!apiKey) {
    return (
      <div className={styles.page}>
        <TopBar />
        <Nav />
        <div className={styles.setupContainer}>
          <div className={styles.setupCard}>
            <h2 className={styles.setupTitle}>Relationship Councillor</h2>
            <p className={styles.setupText}>
              The councillor uses Gemini AI to give personalised relationship advice based on your shared data. You need a free Gemini API key to use this.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.setupLink}
            >
              Get free API key at aistudio.google.com
            </a>
            <div className={styles.keyRow}>
              <input
                className={styles.keyInput}
                type="password"
                placeholder="Paste Gemini API key..."
                value={keyInput}
                onChange={e => setKeyInput(e.target.value)}
              />
              <button
                className={styles.saveKeyBtn}
                onClick={() => void saveKey()}
                disabled={savingKey || !keyInput.trim()}
              >
                {savingKey ? 'Saving...' : 'Save'}
              </button>
            </div>
            <p className={styles.setupNote}>
              Key stored in your private Firestore doc, never shared.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <TopBar />
      <Nav />
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <span className={styles.chatTitle}>Councillor</span>
          <button
            className={styles.resetKey}
            onClick={() => { setApiKey(''); setMessages([]); setHistory([]) }}
          >
            Change key
          </button>
        </div>

        {messages.length === 0 && (
          <div className={styles.emptyChat}>
            <p>Ask for relationship advice, conflict resolution, or just check in on how things are going between you and {nickname}.</p>
          </div>
        )}

        <div className={styles.messageList}>
          {messages.map((m, i) => (
            <div key={i} className={`${styles.bubble} ${m.role === 'user' ? styles.userBubble : styles.modelBubble}`}>
              {m.text}
            </div>
          ))}
          {loading && <div className={`${styles.bubble} ${styles.modelBubble} ${styles.typing}`}>...</div>}
          <div ref={bottomRef} />
        </div>

        <div className={styles.inputRow}>
          <textarea
            className={styles.chatInput}
            placeholder="Ask the councillor..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={2}
            disabled={loading}
          />
          <button
            className={styles.sendBtn}
            onClick={() => void send()}
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
