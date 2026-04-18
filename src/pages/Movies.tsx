import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useMovies, type MovieStatus } from '../hooks/useMovies'
import Nav from '../components/Nav'
import styles from './Movies.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

const STATUS_LABELS: Record<MovieStatus, string> = {
  want_to_watch: 'Want to watch',
  watching: 'Watching',
  finished: 'Finished',
}
const STATUS_NEXT: Record<MovieStatus, MovieStatus> = {
  want_to_watch: 'watching',
  watching: 'finished',
  finished: 'want_to_watch',
}

export default function Movies() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = user?.uid && userData?.partnerId ? partnershipId(user.uid, userData.partnerId) : null
  const { movies, addMovie, updateStatus, deleteMovie } = useMovies(pid)

  const [titleInput, setTitleInput] = useState('')
  const [noteInput, setNoteInput] = useState('')
  const [filter, setFilter] = useState<MovieStatus | 'all'>('all')

  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'partner'

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!titleInput.trim() || !user?.uid) return
    void addMovie(titleInput.trim(), noteInput.trim(), user.uid)
    setTitleInput('')
    setNoteInput('')
  }

  const filtered = filter === 'all' ? movies : movies.filter(m => m.status === filter)

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <h2 className={styles.title}>Watch List</h2>
        <p className={styles.sub}>Movies and shows, you and {partnerName}</p>

        <form className={styles.addForm} onSubmit={handleAdd}>
          <input
            className={styles.input}
            placeholder="Movie or show title..."
            value={titleInput}
            onChange={e => setTitleInput(e.target.value)}
            maxLength={100}
          />
          <input
            className={styles.input}
            placeholder="Note (optional)"
            value={noteInput}
            onChange={e => setNoteInput(e.target.value)}
            maxLength={100}
          />
          <button className={styles.addBtn} type="submit">Add</button>
        </form>

        <div className={styles.filterRow}>
          {(['all', 'want_to_watch', 'watching', 'finished'] as const).map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : STATUS_LABELS[f]}
            </button>
          ))}
        </div>

        <ul className={styles.list}>
          {filtered.length === 0 && (
            <li className={styles.empty}>Nothing here yet. Add something above.</li>
          )}
          {filtered.map(m => (
            <li key={m.id} className={styles.item}>
              <div className={styles.info}>
                <span className={styles.itemTitle}>{m.title}</span>
                {m.note && <span className={styles.itemNote}>{m.note}</span>}
                <span className={styles.addedBy}>
                  added by {m.addedBy === user?.uid ? 'you' : partnerName}
                </span>
              </div>
              <div className={styles.actions}>
                <button
                  className={`${styles.statusBtn} ${styles[m.status]}`}
                  onClick={() => void updateStatus(m.id, STATUS_NEXT[m.status])}
                  title="Click to advance status"
                >
                  {STATUS_LABELS[m.status]}
                </button>
                <button className={styles.deleteBtn} onClick={() => void deleteMovie(m.id)}>x</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
