import { useState, useEffect } from 'react'
import {
  collection, query, orderBy, onSnapshot,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

export type GrowthTarget = 'me' | 'us' | 'them'
export type GrowthStatus = 'open' | 'working' | 'resolved'

export interface GrowthItem {
  id: string
  text: string
  target: GrowthTarget
  status: GrowthStatus
  addedBy: string
  createdAt: { seconds: number } | null
}

export function useGrowth(partnershipId: string | null) {
  const [items, setItems] = useState<GrowthItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!partnershipId) { setLoading(false); return }
    const q = query(
      collection(db, 'partnerships', partnershipId, 'growth'),
      orderBy('createdAt', 'desc')
    )
    const unsub = onSnapshot(q, snap => {
      setItems(snap.docs.map(d => ({ id: d.id, ...d.data() } as GrowthItem)))
      setLoading(false)
    })
    return unsub
  }, [partnershipId])

  const addItem = (text: string, target: GrowthTarget, addedBy: string) => {
    if (!partnershipId || !text.trim()) return
    return addDoc(collection(db, 'partnerships', partnershipId, 'growth'), {
      text: text.trim(),
      target,
      status: 'open',
      addedBy,
      createdAt: serverTimestamp(),
    })
  }

  const updateStatus = (itemId: string, status: GrowthStatus) => {
    if (!partnershipId) return
    return updateDoc(doc(db, 'partnerships', partnershipId, 'growth', itemId), { status })
  }

  const deleteItem = (itemId: string) => {
    if (!partnershipId) return
    return deleteDoc(doc(db, 'partnerships', partnershipId, 'growth', itemId))
  }

  return { items, loading, addItem, updateStatus, deleteItem }
}
