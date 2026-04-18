import { useState, useEffect } from 'react'
import {
  collection, query, orderBy, onSnapshot,
  addDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

export type EventType = 'period' | 'fight' | 'special' | 'anniversary' | 'movie'

export interface CalendarEvent {
  id: string
  type: EventType
  date: string        // YYYY-MM-DD
  note: string
  addedBy: string
  createdAt: { seconds: number } | null
}

export const EVENT_META: Record<EventType, { label: string; color: string; emoji: string }> = {
  period:      { label: 'Period',      color: '#e91e8c', emoji: '🌸' },
  fight:       { label: 'Fight',       color: '#e53935', emoji: '⚡' },
  special:     { label: 'Special',     color: '#7b1fa2', emoji: '⭐' },
  anniversary: { label: 'Anniversary', color: '#f57c00', emoji: '💝' },
  movie:       { label: 'Movie Night', color: '#1976d2', emoji: '🎬' },
}

export function useCalendar(partnershipId: string | null) {
  const [events, setEvents] = useState<CalendarEvent[]>([])

  useEffect(() => {
    if (!partnershipId) return
    const q = query(
      collection(db, 'partnerships', partnershipId, 'calendarEvents'),
      orderBy('date', 'asc')
    )
    return onSnapshot(q, snap =>
      setEvents(snap.docs.map(d => ({ id: d.id, ...d.data() } as CalendarEvent)))
    )
  }, [partnershipId])

  const addEvent = (type: EventType, date: string, note: string, addedBy: string) => {
    if (!partnershipId) return
    return addDoc(collection(db, 'partnerships', partnershipId, 'calendarEvents'), {
      type, date, note, addedBy, createdAt: serverTimestamp(),
    })
  }

  const deleteEvent = (eventId: string) => {
    if (!partnershipId) return
    return deleteDoc(doc(db, 'partnerships', partnershipId, 'calendarEvents', eventId))
  }

  return { events, addEvent, deleteEvent }
}
