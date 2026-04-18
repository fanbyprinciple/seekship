import { useState, useEffect } from 'react'
import {
  collection, query, orderBy, onSnapshot,
  addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

export type MovieStatus = 'want_to_watch' | 'watching' | 'finished'

export interface Movie {
  id: string
  title: string
  status: MovieStatus
  note: string
  addedBy: string
  createdAt: { seconds: number } | null
}

export function useMovies(partnershipId: string | null) {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    if (!partnershipId) return
    const q = query(
      collection(db, 'partnerships', partnershipId, 'movies'),
      orderBy('createdAt', 'desc')
    )
    return onSnapshot(q, snap =>
      setMovies(snap.docs.map(d => ({ id: d.id, ...d.data() } as Movie)))
    )
  }, [partnershipId])

  const addMovie = (title: string, note: string, addedBy: string) => {
    if (!partnershipId) return
    return addDoc(collection(db, 'partnerships', partnershipId, 'movies'), {
      title, note, addedBy, status: 'want_to_watch', createdAt: serverTimestamp(),
    })
  }

  const updateStatus = (movieId: string, status: MovieStatus) => {
    if (!partnershipId) return
    return updateDoc(doc(db, 'partnerships', partnershipId, 'movies', movieId), { status })
  }

  const deleteMovie = (movieId: string) => {
    if (!partnershipId) return
    return deleteDoc(doc(db, 'partnerships', partnershipId, 'movies', movieId))
  }

  return { movies, addMovie, updateStatus, deleteMovie }
}
