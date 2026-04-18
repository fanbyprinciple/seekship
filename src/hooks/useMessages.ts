import { useState, useEffect } from 'react'
import {
  collection, query, where, orderBy, limit,
  onSnapshot, deleteDoc, doc,
} from 'firebase/firestore'
import { db } from '../firebase'

export interface Message {
  id: string
  fromUid: string
  toUid: string
  text: string
  acknowledged: boolean
  sentAt: { seconds: number } | null
}

export function useMessages(uid: string | undefined, partnerId: string | undefined) {
  const [sent, setSent] = useState<Message[]>([])
  const [received, setReceived] = useState<Message[]>([])

  useEffect(() => {
    if (!uid || !partnerId) return

    const sentQ = query(
      collection(db, 'messages'),
      where('fromUid', '==', uid),
      where('toUid', '==', partnerId),
      orderBy('sentAt', 'desc'),
      limit(30)
    )
    const recvQ = query(
      collection(db, 'messages'),
      where('fromUid', '==', partnerId),
      where('toUid', '==', uid),
      orderBy('sentAt', 'desc'),
      limit(30)
    )

    const u1 = onSnapshot(sentQ, snap =>
      setSent(snap.docs.map(d => ({ id: d.id, ...d.data() } as Message)))
    )
    const u2 = onSnapshot(recvQ, snap =>
      setReceived(snap.docs.map(d => ({ id: d.id, ...d.data() } as Message)))
    )

    return () => { u1(); u2() }
  }, [uid, partnerId])

  const allMessages = [...sent, ...received].sort(
    (a, b) => (b.sentAt?.seconds ?? 0) - (a.sentAt?.seconds ?? 0)
  )

  const deleteMessage = (messageId: string) =>
    deleteDoc(doc(db, 'messages', messageId))

  return { allMessages, deleteMessage }
}
