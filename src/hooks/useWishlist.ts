import { useState, useEffect } from 'react'
import {
  collection, query, orderBy, onSnapshot,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

export type WishPriority = 'high' | 'medium' | 'low'
export type WishStatus = 'wanted' | 'gifted'

export interface WishItem {
  id: string
  title: string
  link: string
  priority: WishPriority
  status: WishStatus
  addedBy: string
  createdAt: { seconds: number } | null
}

export function useWishlist(partnershipId: string | null) {
  const [items, setItems] = useState<WishItem[]>([])

  useEffect(() => {
    if (!partnershipId) return
    const q = query(
      collection(db, 'partnerships', partnershipId, 'wishlist'),
      orderBy('createdAt', 'desc')
    )
    return onSnapshot(q, snap =>
      setItems(snap.docs.map(d => ({ id: d.id, ...d.data() } as WishItem)))
    )
  }, [partnershipId])

  const addItem = (title: string, link: string, priority: WishPriority, addedBy: string) => {
    if (!partnershipId) return
    return addDoc(collection(db, 'partnerships', partnershipId, 'wishlist'), {
      title, link, priority, status: 'wanted', addedBy, createdAt: serverTimestamp(),
    })
  }

  const markGifted = (itemId: string) => {
    if (!partnershipId) return
    return updateDoc(doc(db, 'partnerships', partnershipId, 'wishlist', itemId), { status: 'gifted' })
  }

  const deleteItem = (itemId: string) => {
    if (!partnershipId) return
    return deleteDoc(doc(db, 'partnerships', partnershipId, 'wishlist', itemId))
  }

  return { items, addItem, markGifted, deleteItem }
}
