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
import Nav from '../components/Nav'
import styles from './Home.module.css'

function formatTime(seconds: number | undefined): string {
  if (!seconds) return ''
  return new Date(seconds * 1000).toLocaleString(undefined, {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  })
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
  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'your partner'
  const partnerTyping: boolean = partnerData?.isTyping ?? false

  // Update typing indicator in Firestore
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

  // Clear typing on unmount
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
      <header className={styles.header}>
        <span className={styles.logo}>Seekship ♥</span>
        <div className={styles.userInfo}>
          {user?.photoURL && <img src={user.photoURL} className={styles.avatar} alt="" />}
          <Link to="/settings" className={styles.logoutBtn}>⚙</Link>
          <button className={styles.logoutBtn} onClick={() => void logout()}>Sign out</button>
        </div>
      </header>

      <Nav />

      <main className={styles.main}>
        {partnerTyping && (
          <div className={styles.typingBanner}>✏ {partnerName} is composing something...</div>
        )}

        <p className={styles.greeting}>Send a note to <strong>{partnerName}</strong></p>

        <div className={styles.card}>
          <textarea
            className={styles.textarea}
            placeholder={`What do you want ${partnerName} to know right now?`}
            value={text}
            onChange={(e) => void handleTextChange(e.target.value)}
            maxLength={280}
            rows={5}
          />
          <div className={styles.charCount}>{text.length}/280</div>

          <button
            className={styles.sendBtn}
            onClick={() => void sendMessage()}
            disabled={sending || !text.trim()}
          >
            {sending ? 'Sending...' : sent ? '✓ Sent!' : 'Send ✉'}
          </button>
        </div>

        {allMessages.length > 0 && (
          <div className={styles.historySection}>
            <p className={styles.historyLabel}>Message History</p>
            <ul className={styles.historyList}>
              {allMessages.map(msg => (
                <li key={msg.id} className={`${styles.historyItem} ${msg.fromUid === user?.uid ? styles.sent : styles.received}`}>
                  <span className={styles.directionTag}>
                    {msg.fromUid === user?.uid ? '↑ you' : `↓ ${partnerName}`}
                  </span>
                  <span className={styles.msgText}>{msg.text}</span>
                  <span className={styles.msgMeta}>
                    {formatTime(msg.sentAt?.seconds ?? undefined)}
                    {msg.fromUid === user?.uid && (
                      <span className={msg.acknowledged ? styles.ackDone : styles.ackPending}>
                        {msg.acknowledged ? ' ✓' : ' ⏳'}
                      </span>
                    )}
                  </span>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => void deleteMessage(msg.id)}
                    aria-label="Delete"
                  >×</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  )
}
