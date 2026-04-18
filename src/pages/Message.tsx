import { useEffect, useState } from 'react'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  updateDoc,
  doc,
  serverTimestamp,
  type DocumentData,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import Nav from '../components/Nav'
import styles from './Message.module.css'

export default function Message() {
  const { user } = useAuth()
  const { userData } = usePartner(user?.uid)
  const [incomingMessage, setIncomingMessage] = useState<(DocumentData & { id: string }) | null>(null)

  const partnerId: string | undefined = userData?.partnerId

  useEffect(() => {
    if (!user?.uid || !partnerId) return

    const q = query(
      collection(db, 'messages'),
      where('toUid', '==', user.uid),
      where('fromUid', '==', partnerId),
      where('acknowledged', '==', false),
      orderBy('sentAt', 'desc'),
      limit(1)
    )

    return onSnapshot(q, (snap) => {
      if (!snap.empty) {
        const d = snap.docs[0]
        setIncomingMessage({ id: d.id, ...d.data() })
      } else {
        setIncomingMessage(null)
      }
    })
  }, [user?.uid, partnerId])

  const acknowledge = async () => {
    if (!incomingMessage) return
    await updateDoc(doc(db, 'messages', incomingMessage.id), {
      acknowledged: true,
      acknowledgedAt: serverTimestamp(),
    })
    setIncomingMessage(null)
  }

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.fullscreen}>
        {!incomingMessage ? (
          <div className={styles.empty}>
            <p>No new messages ♥</p>
            <p className={styles.hint}>When your partner sends a note, it will appear here.</p>
          </div>
        ) : (
          <div className={styles.card}>
            <p className={styles.from}>from your partner</p>
            <p className={styles.messageText}>{incomingMessage.text as string}</p>
            <button className={styles.ackBtn} onClick={() => void acknowledge()}>
              Tap to acknowledge
              <span className={styles.heart}>♥</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
