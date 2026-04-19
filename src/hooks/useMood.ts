import { useState, useEffect } from 'react'
import { doc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export type Mood = 'happy' | 'average' | 'sad' | 'angry' | 'indifferent'

export const MOOD_OPTIONS: { mood: Mood; emoji: string; label: string }[] = [
  { mood: 'happy',       emoji: '😊', label: 'Happy' },
  { mood: 'average',     emoji: '😐', label: 'Average' },
  { mood: 'sad',         emoji: '😢', label: 'Sad' },
  { mood: 'angry',       emoji: '😠', label: 'Angry' },
  { mood: 'indifferent', emoji: '😑', label: 'Indifferent' },
]

function todayKey(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function useMood(
  partnershipId: string | null,
  myUid: string | undefined,
  partnerUid: string | undefined
) {
  const [myMood, setMyMood] = useState<Mood | null>(null)
  const [partnerMood, setPartnerMood] = useState<Mood | null>(null)

  useEffect(() => {
    if (!partnershipId) return
    const date = todayKey()
    const ref = doc(db, 'partnerships', partnershipId, 'moods', date)

    return onSnapshot(ref, (snap) => {
      const data = snap.data()
      if (!data) return
      if (myUid && data[myUid]) setMyMood(data[myUid] as Mood)
      if (partnerUid && data[partnerUid]) setPartnerMood(data[partnerUid] as Mood)
    })
  }, [partnershipId, myUid, partnerUid])

  const logMood = async (mood: Mood) => {
    if (!partnershipId || !myUid) return
    const date = todayKey()
    const ref = doc(db, 'partnerships', partnershipId, 'moods', date)
    await setDoc(ref, { [myUid]: mood, updatedAt: serverTimestamp() }, { merge: true })
    setMyMood(mood)
  }

  return { myMood, partnerMood, logMood }
}
