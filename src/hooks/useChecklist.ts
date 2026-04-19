import { useState, useEffect } from 'react'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  type DocumentData,
} from 'firebase/firestore'
import { db } from '../firebase'
import { partnershipId } from '../utils/partnership'

export interface ChecklistItem {
  id: string
  text: string
  checked: boolean
  addedBy: string
  createdAt: DocumentData
}

export function useChecklist(uid: string | undefined, partnerId: string | undefined) {
  const [items, setItems] = useState<ChecklistItem[]>([])
  const [loading, setLoading] = useState(true)

  const pid = uid && partnerId ? partnershipId(uid, partnerId) : null

  useEffect(() => {
    if (!pid) { setLoading(false); return }

    const q = query(
      collection(db, 'checklists', pid, 'items'),
      orderBy('createdAt', 'asc')
    )

    const unsub = onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() } as ChecklistItem)))
      setLoading(false)
    })

    return unsub
  }, [pid])

  const addItem = async (text: string) => {
    if (!pid || !uid || !text.trim()) return
    await addDoc(collection(db, 'checklists', pid, 'items'), {
      text: text.trim(),
      checked: false,
      addedBy: uid,
      createdAt: serverTimestamp(),
    })
  }

  const toggleItem = async (itemId: string, checked: boolean) => {
    if (!pid) return
    await updateDoc(doc(db, 'checklists', pid, 'items', itemId), { checked })
  }

  const deleteItem = async (itemId: string) => {
    if (!pid) return
    await deleteDoc(doc(db, 'checklists', pid, 'items', itemId))
  }

  return { items, loading, addItem, toggleItem, deleteItem }
}
