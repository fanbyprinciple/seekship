import { useState, useEffect } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export interface MeetupData {
  date: string | null   // YYYY-MM-DD
  note: string
}

export function useMeetup(partnershipId: string | null) {
  const [meetup, setMeetup] = useState<MeetupData>({ date: null, note: '' })

  useEffect(() => {
    if (!partnershipId) return
    return onSnapshot(doc(db, 'partnerships', partnershipId), snap => {
      const d = snap.data()
      setMeetup({ date: d?.meetupDate ?? null, note: d?.meetupNote ?? '' })
    })
  }, [partnershipId])

  const saveMeetup = (date: string, note: string) => {
    if (!partnershipId) return
    return setDoc(doc(db, 'partnerships', partnershipId), { meetupDate: date, meetupNote: note }, { merge: true })
  }

  const daysUntil = meetup.date
    ? Math.ceil((new Date(meetup.date).getTime() - Date.now()) / 86400000)
    : null

  return { meetup, saveMeetup, daysUntil }
}
