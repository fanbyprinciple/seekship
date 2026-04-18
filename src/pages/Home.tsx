import { useState, useEffect } from 'react'
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  type DocumentData,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import styles from './Home.module.css'

export default function Home() {
  const { user, logout } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [lastMessage, setLastMessage] = useState<DocumentData | null>(null)

  const partnerId: string | undefined = userData?.partnerId

  // Watch last message sent to partner for acknowledgement status
  useEffect(() => {
    if (!user?.uid || !partnerId) return

    const q = query(
      collection(db, 'messages'),
      where('fromUid', '==', user.uid),
      where('toUid', '==', partnerId),
      orderBy('sentAt', 'desc'),
      limit(1)
    )

    const unsub = onSnapshot(q, (snap) => {
      if (!snap.empty) setLastMessage(snap.docs[0].data())
      else setLastMessage(null)
    })

    return unsub
  }, [user?.uid, partnerId])

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
    setText('')
    setSending(false)
  }

  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'your partner'

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.logo}>Seekship</span>
        <div className={styles.userInfo}>
          {user?.photoURL && <img src={user.photoURL} className={styles.avatar} alt="" />}
          <button className={styles.logoutBtn} onClick={() => void logout()}>Sign out</button>
        </div>
      </header>

      <main className={styles.main}>
        <p className={styles.greeting}>Send a message to <strong>{partnerName}</strong></p>

        <textarea
          className={styles.textarea}
          placeholder={`What do you want ${partnerName} to know right now?`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={280}
          rows={4}
        />
        <div className={styles.charCount}>{text.length}/280</div>

        <button
          className={styles.sendBtn}
          onClick={() => void sendMessage()}
          disabled={sending || !text.trim()}
        >
          {sending ? 'Sending...' : 'Send'}
        </button>

        {lastMessage && (
          <div className={styles.lastMsg}>
            <p className={styles.lastMsgLabel}>Last message</p>
            <p className={styles.lastMsgText}>"{lastMessage.text as string}"</p>
            <p className={lastMessage.acknowledged ? styles.seen : styles.waiting}>
              {lastMessage.acknowledged ? '✓ Seen' : '⏳ Waiting for acknowledgement...'}
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
