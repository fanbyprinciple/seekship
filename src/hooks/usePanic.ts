import { useState, useEffect } from 'react'
import { doc, onSnapshot, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export type PanicCause = 'food' | 'pain' | 'boredom'

export interface PanicState {
  active: boolean
  cause: PanicCause | null
  activatedBy: string | null
}

export function usePanic(partnershipId: string | null) {
  const [panic, setPanic] = useState<PanicState>({ active: false, cause: null, activatedBy: null })

  useEffect(() => {
    if (!partnershipId) return
    return onSnapshot(doc(db, 'panics', partnershipId), snap => {
      const d = snap.data()
      setPanic({
        active: d?.active ?? false,
        cause: d?.cause ?? null,
        activatedBy: d?.activatedBy ?? null,
      })
    })
  }, [partnershipId])

  const triggerPanic = (cause: PanicCause, uid: string) => {
    if (!partnershipId) return
    return setDoc(doc(db, 'panics', partnershipId), {
      active: true, cause, activatedBy: uid, triggeredAt: serverTimestamp(),
    })
  }

  const dismissPanic = () => {
    if (!partnershipId) return
    return updateDoc(doc(db, 'panics', partnershipId), { active: false })
  }

  return { panic, triggerPanic, dismissPanic }
}
