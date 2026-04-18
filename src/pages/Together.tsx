import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useMeetup } from '../hooks/useMeetup'
import { useMovies, type MovieStatus } from '../hooks/useMovies'
import Nav from '../components/Nav'
import styles from './Together.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

const STATUS_LABELS: Record<MovieStatus, string> = {
  want_to_watch: '📋 Want to watch',
  watching: '▶ Watching',
  finished: '✓ Finished',
}
const STATUS_NEXT: Record<MovieStatus, MovieStatus> = {
  want_to_watch: 'watching',
  watching: 'finished',
  finished: 'want_to_watch',
}

export default function Together() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = user?.uid && userData?.partnerId ? partnershipId(user.uid, userData.partnerId) : null

  const { meetup, saveMeetup, daysUntil } = useMeetup(pid)
  const { movies, addMovie, updateStatus, deleteMovie } = useMovies(pid)

  const [meetupDate, setMeetupDate] = useState(meetup.date ?? '')
  const [meetupNote, setMeetupNote] = useState(meetup.note ?? '')
  const [movieInput, setMovieInput] = useState('')
  const [movieNote, setMovieNote] = useState('')
  const [filter, setFilter] = useState<MovieStatus | 'all'>('all')

  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'partner'

  const handleSaveMeetup = () => {
    if (meetupDate) void saveMeetup(meetupDate, meetupNote)
  }

  const handleAddMovie = (e: React.FormEvent) => {
    e.preventDefault()
    if (!movieInput.trim() || !user?.uid) return
    void addMovie(movieInput.trim(), movieNote.trim(), user.uid)
    setMovieInput('')
    setMovieNote('')
  }

  const filtered = filter === 'all' ? movies : movies.filter(m => m.status === filter)

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>

        {/* Meetup Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🗓 Next Meetup</h2>
          {meetup.date && daysUntil !== null && (
            <div className={styles.countdown}>
              {daysUntil > 0
                ? <><span className={styles.countNum}>{daysUntil}</span> days to go ✈</>
                : daysUntil === 0
                ? '🎉 It\'s today!'
                : <><span className={styles.countNum}>{Math.abs(daysUntil)}</span> days ago</>
              }
              {meetup.note && <p className={styles.meetupNote}>{meetup.note}</p>}
            </div>
          )}
          <div className={styles.meetupForm}>
            <input
              type="date"
              className={styles.dateInput}
              value={meetupDate}
              onChange={e => setMeetupDate(e.target.value)}
            />
            <input
              className={styles.noteInput}
              placeholder="Note (city, occasion...)"
              value={meetupNote}
              onChange={e => setMeetupNote(e.target.value)}
              maxLength={80}
            />
            <button className={styles.saveBtn} onClick={handleSaveMeetup}>Save</button>
          </div>
        </section>

        {/* Movies Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎬 What We're Watching</h2>

          <form className={styles.addForm} onSubmit={handleAddMovie}>
            <input
              className={styles.input}
              placeholder="Movie or show title..."
              value={movieInput}
              onChange={e => setMovieInput(e.target.value)}
              maxLength={100}
            />
            <input
              className={styles.input}
              placeholder="Note (optional)"
              value={movieNote}
              onChange={e => setMovieNote(e.target.value)}
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
                {f === 'all' ? 'All' : STATUS_LABELS[f].split(' ').slice(1).join(' ')}
              </button>
            ))}
          </div>

          <ul className={styles.movieList}>
            {filtered.length === 0 && <li className={styles.empty}>Nothing here yet.</li>}
            {filtered.map(movie => (
              <li key={movie.id} className={styles.movieItem}>
                <div className={styles.movieInfo}>
                  <span className={styles.movieTitle}>{movie.title}</span>
                  {movie.note && <span className={styles.movieNote}>{movie.note}</span>}
                  <span className={styles.addedBy}>
                    added by {movie.addedBy === user?.uid ? 'you' : partnerName}
                  </span>
                </div>
                <div className={styles.movieActions}>
                  <button
                    className={`${styles.statusBtn} ${styles[movie.status]}`}
                    onClick={() => void updateStatus(movie.id, STATUS_NEXT[movie.status])}
                    title="Click to change status"
                  >
                    {STATUS_LABELS[movie.status]}
                  </button>
                  <button className={styles.deleteBtn} onClick={() => void deleteMovie(movie.id)}>×</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
