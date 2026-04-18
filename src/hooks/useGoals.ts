import { useState, useEffect } from 'react'
import {
  collection, query, orderBy, onSnapshot,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

export type GoalStatus = 'not_started' | 'in_progress' | 'done'
export type GoalCategory = 'relationship' | 'travel' | 'personal' | 'financial' | 'health'

export interface Goal {
  id: string
  title: string
  description: string
  category: GoalCategory
  status: GoalStatus
  targetDate: string
  addedBy: string
  createdAt: { seconds: number } | null
}

export function useGoals(partnershipId: string | null) {
  const [goals, setGoals] = useState<Goal[]>([])

  useEffect(() => {
    if (!partnershipId) return
    const q = query(
      collection(db, 'partnerships', partnershipId, 'goals'),
      orderBy('createdAt', 'desc')
    )
    return onSnapshot(q, snap =>
      setGoals(snap.docs.map(d => ({ id: d.id, ...d.data() } as Goal)))
    )
  }, [partnershipId])

  const addGoal = (data: Omit<Goal, 'id' | 'createdAt'>) => {
    if (!partnershipId) return
    return addDoc(collection(db, 'partnerships', partnershipId, 'goals'), {
      ...data, createdAt: serverTimestamp(),
    })
  }

  const updateStatus = (goalId: string, status: GoalStatus) => {
    if (!partnershipId) return
    return updateDoc(doc(db, 'partnerships', partnershipId, 'goals', goalId), { status })
  }

  const deleteGoal = (goalId: string) => {
    if (!partnershipId) return
    return deleteDoc(doc(db, 'partnerships', partnershipId, 'goals', goalId))
  }

  return { goals, addGoal, updateStatus, deleteGoal }
}
