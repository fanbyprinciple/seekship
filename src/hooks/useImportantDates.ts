import { useState, useEffect } from 'react'
import {
  collection, addDoc, deleteDoc, doc,
  onSnapshot, serverTimestamp, query, orderBy,
} from 'firebase/firestore'
import { db } from '../firebase'

export type DateType = 'anniversary' | 'birthday' | 'custom'

export interface ImportantDate {
  id: string
  label: string
  date: string    // MM-DD
  year?: number   // optional founding year (for anniversaries)
  type: DateType
  createdBy: string
}

function nextOccurrence(mmdd: string): Date {
  const [mm, dd] = mmdd.split('-').map(Number)
  const now = new Date()
  let candidate = new Date(now.getFullYear(), mm - 1, dd)
  if (candidate < now) candidate = new Date(now.getFullYear() + 1, mm - 1, dd)
  return candidate
}

export function daysUntil(mmdd: string): number {
  const next = nextOccurrence(mmdd)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return Math.round((next.getTime() - now.getTime()) / 86400000)
}

export function useImportantDates(partnershipId: string | null) {
  const [dates, setDates] = useState<ImportantDate[]>([])

  useEffect(() => {
    if (!partnershipId) return
    const q = query(
      collection(db, 'partnerships', partnershipId, 'dates'),
      orderBy('label')
    )
    return onSnapshot(q, (snap) => {
      setDates(snap.docs.map(d => ({ id: d.id, ...d.data() } as ImportantDate)))
    })
  }, [partnershipId])

  const addDate = async (entry: Omit<ImportantDate, 'id'>) => {
    if (!partnershipId) return
    await addDoc(collection(db, 'partnerships', partnershipId, 'dates'), {
      ...entry,
      createdAt: serverTimestamp(),
    })
  }

  const removeDate = async (id: string) => {
    if (!partnershipId) return
    await deleteDoc(doc(db, 'partnerships', partnershipId, 'dates', id))
  }

  // dates that are today or tomorrow
  const upcoming = dates.filter(d => {
    const n = daysUntil(d.date)
    return n === 0 || n === 1
  })

  return { dates, addDate, removeDate, upcoming }
}
