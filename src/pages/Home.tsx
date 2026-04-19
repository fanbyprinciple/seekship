import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  collection, addDoc, serverTimestamp,
  doc, updateDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useMessages } from '../hooks/useMessages'
import { usePanic, type PanicCause } from '../hooks/usePanic'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import ThemePicker from '../components/ThemePicker'
import PanicOverlay from '../components/PanicOverlay'
import styles from './Home.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

function timeAgo(seconds: number | undefined): string {
  if (!seconds) return ''
  const diff = Math.floor(Date.now() / 1000) - seconds
  if (diff < 60) return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return new Date(seconds * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

function seenAt(seconds: number | undefined): string {
  if (!seconds) return ''
  const diff = Math.floor(Date.now() / 1000) - seconds
  if (diff < 60) return 'seen just now'
  if (diff < 3600) return `seen ${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `seen ${Math.floor(diff / 3600)}h ago`
  return `seen ${new Date(seconds * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`
}

export default function Home() {
  const { user, logout } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const { allMessages, deleteMessage } = useMessages(user?.uid, userData?.partnerId)
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const partnerId: string | undefined = userData?.partnerId
  const nickname: string = (userData?.partnerNickname as string | undefined)
    ?? partnerData?.displayName?.split(' ')[0]
    ?? 'love'
  const partnerTyping: boolean = partnerData?.isTyping ?? false
  const pid = user?.uid && partnerId ? partnershipId(user.uid, partnerId) : null
  const { panic, triggerPanic, dismissPanic } = usePanic(pid)
  const [showPanicPicker, setShowPanicPicker] = useState(false)

  const handlePanic = async (cause: PanicCause) => {
    if (!user?.uid) return
    await triggerPanic(cause, user.uid)
    setShowPanicPicker(false)
  }

  const handleTextChange = async (val: string) => {
    setText(val)
    if (!user?.uid) return
    await updateDoc(doc(db, 'users', user.uid), { isTyping: val.length > 0 })
    if (typingTimer.current) clearTimeout(typingTimer.current)
    if (val.length > 0) {
      typingTimer.current = setTimeout(() => {
        void updateDoc(doc(db, 'users', user.uid), { isTyping: false })
      }, 4000)
    }
  }

  useEffect(() => {
    return () => {
      if (user?.uid) void updateDoc(doc(db, 'users', user.uid), { isTyping: false })
    }
  }, [user?.uid])

  const sendMessage = async () => {
    if (!text.trim() || !user?.uid || !partnerId) return
    setSending(true)
    await addDoc(collection(db, 'messages'), {
      fromUid: user.uid,
      toUid: partnerId,
      text: text.trim(),
      acknowledged: false,
      sentAt: serverTimestamp(),
      acknowledgedAt: null,
    })
    await updateDoc(doc(db, 'users', user.uid), { isTyping: false })
    setText('')
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <div className={styles.page}>
      <PanicOverlay
        panic={panic}
        isMe={panic.activatedBy === user?.uid}
        partnerName={nickname}
        onDismiss={() => void dismissPanic()}
      />

      <header className={styles.header}>
        <Logo size={32} />
        <div className={styles.headerRight}>
          <ThemePicker />
          <div className={styles.panicWrapper}>
            <button className={styles.panicBtn} onClick={() => setShowPanicPicker(p => !p)}>
              Panic
            </button>
            {showPanicPicker && (
              <div className={styles.panicPicker}>
                {(['food', 'pain', 'boredom'] as PanicCause[]).map(c => (
                  <button key={c} className={styles.panicChoice} onClick={() => void handlePanic(c)}>
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
          {user?.photoURL && <img src={user.photoURL} className={styles.avatar} alt="" />}
          <Link to="/settings" className={styles.headerBtn}>Settings</Link>
          <button className={styles.headerBtn} onClick={() => void logout()}>Sign out</button>
        </div>
      </header>

      <Nav />

      <main className={styles.main}>
        {partnerTyping && (
          <div className={styles.typingBanner}>{nickname} is writing something...</div>
        )}

        {/* Postcard compose */}
        <div className={styles.postcard}>
          <div className={styles.postcardHeader}>
            <span className={styles.postcardTo}>To: {nickname}</span>
            <div className={styles.stamp}>
              <svg width="38" height="44" viewBox="0 0 38 44" fill="none">
                <rect x="2" y="2" width="34" height="40" rx="2" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="3 2"/>
                <rect x="6" y="6" width="26" height="32" rx="1" stroke="var(--ink)" strokeWidth="1"/>
                <path d="M19 12 L22 18 L29 18 L23 22 L25 29 L19 25 L13 29 L15 22 L9 18 L16 18 Z" stroke="var(--accent)" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
          </div>

          <div className={styles.postcardLines}>
            <textarea
              className={styles.textarea}
              placeholder={`Dear ${nickname},\n\nWrite your heart out...`}
              value={text}
              onChange={(e) => void handleTextChange(e.target.value)}
              maxLength={280}
              rows={5}
            />
          </div>

          <div className={styles.postcardFooter}>
            <span className={styles.charCount}>{280 - text.length} left</span>
            <button
              className={styles.sendBtn}
              onClick={() => void sendMessage()}
              disabled={sending || !text.trim()}
            >
              {sending ? 'Sending...' : sent ? 'Sent!' : 'Send'}
            </button>
          </div>
        </div>

        {/* Inbox */}
        {allMessages.length > 0 && (
          <div className={styles.inboxSection}>
            <p className={styles.inboxLabel}>Letters</p>
            <ul className={styles.letterList}>
              {allMessages.map(msg => {
                const isMine = msg.fromUid === user?.uid
                return (
                  <li key={msg.id} className={`${styles.letter} ${isMine ? styles.mine : styles.theirs}`}>
                    <div className={styles.letterBody}>
                      <span className={styles.letterFrom}>{isMine ? 'You' : nickname}</span>
                      <span className={styles.letterText}>{msg.text}</span>
                    </div>
                    <div className={styles.letterMeta}>
                      <span className={styles.letterTime}>{timeAgo(msg.sentAt?.seconds ?? undefined)}</span>
                      {isMine && (
                        <span className={msg.acknowledged ? styles.seen : styles.pending}>
                          {msg.acknowledged
                            ? seenAt(msg.acknowledgedAt?.seconds ?? undefined)
                            : 'not yet seen'}
                        </span>
                      )}
                      <button
                        className={styles.deleteBtn}
                        onClick={() => void deleteMessage(msg.id)}
                        aria-label="Delete"
                      >×</button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </main>
    </div>
  )
}
