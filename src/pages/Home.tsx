import { useState, useEffect } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useImportantDates, daysUntil } from '../hooks/useImportantDates'
import { useMeetup } from '../hooks/useMeetup'
import Nav from '../components/Nav'
import TopBar from '../components/TopBar'
import styles from './Home.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

interface Quote { text: string; author: string }

async function fetchQuote(): Promise<Quote> {
  const today = new Date().toDateString()
  if (localStorage.getItem('seekship-quote-date') === today) {
    const q = localStorage.getItem('seekship-quote')
    if (q) return JSON.parse(q) as Quote
  }
  try {
    const res = await fetch('https://dummyjson.com/quotes/random')
    const data = await res.json() as { quote: string; author: string }
    const quote: Quote = { text: data.quote, author: data.author }
    localStorage.setItem('seekship-quote-date', today)
    localStorage.setItem('seekship-quote', JSON.stringify(quote))
    return quote
  } catch {
    return { text: 'Distance means so little when someone means so much.', author: 'Tom McNeal' }
  }
}

export default function Home() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = user?.uid && userData?.partnerId
    ? partnershipId(user.uid, userData.partnerId as string)
    : null
  const { dates, upcoming } = useImportantDates(pid)
  const { daysUntil: meetupDays, meetup } = useMeetup(pid)
  const [quote, setQuote] = useState<Quote | null>(null)
  const [nicknameInput, setNicknameInput] = useState('')
  const [savingNick, setSavingNick] = useState(false)

  const nickname: string = (userData?.partnerNickname as string | undefined)
    ?? partnerData?.displayName?.split(' ')[0]
    ?? 'love'

  const showNicknamePrompt = !!(userData?.partnerId && !userData?.partnerNickname)

  useEffect(() => {
    void fetchQuote().then(setQuote)
  }, [])

  const saveNickname = async () => {
    if (!user?.uid || !nicknameInput.trim()) return
    setSavingNick(true)
    await updateDoc(doc(db, 'users', user.uid), { partnerNickname: nicknameInput.trim() })
    setSavingNick(false)
  }

  const sortedUpcoming = [...upcoming].sort((a, b) => daysUntil(a.date) - daysUntil(b.date))

  return (
    <div className={styles.page}>
      <TopBar />
      <Nav />
      <main className={styles.main}>

        {/* Nickname prompt — shown once until nickname is set */}
        {showNicknamePrompt && (
          <div className={styles.nicknamePrompt}>
            <p className={styles.nicknamePromptTitle}>What do you call your partner? 💕</p>
            <div className={styles.nicknameRow}>
              <input
                className={styles.nicknameInput}
                type="text"
                placeholder={partnerData?.displayName?.split(' ')[0] ?? 'Nickname'}
                value={nicknameInput}
                maxLength={30}
                onChange={e => setNicknameInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') void saveNickname() }}
              />
              <button
                className={styles.nicknameBtn}
                onClick={() => void saveNickname()}
                disabled={savingNick || !nicknameInput.trim()}
              >
                {savingNick ? '...' : 'Save'}
              </button>
            </div>
          </div>
        )}

        {/* Quote of the day */}
        <div className={styles.quoteSection}>
          {quote ? (
            <>
              <p className={styles.quoteText}>"{quote.text}"</p>
              <p className={styles.quoteAuthor}>— {quote.author}</p>
            </>
          ) : (
            <p className={styles.quotePlaceholder}>Loading quote...</p>
          )}
        </div>

        {/* Upcoming events — next 7 days */}
        {sortedUpcoming.length > 0 && (
          <div className={styles.eventsSection}>
            <p className={styles.eventsLabel}>Coming up</p>
            <ul className={styles.eventList}>
              {sortedUpcoming.map(d => {
                const n = daysUntil(d.date)
                return (
                  <li key={d.id} className={`${styles.eventItem} ${n <= 1 ? styles.eventSoon : ''}`}>
                    <span className={styles.eventName}>{d.label}</span>
                    <span className={styles.eventDays}>
                      {n === 0 ? 'Today!' : n === 1 ? 'Tomorrow!' : `in ${n} days`}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {/* All dates — coming within 30 days beyond the 7-day ones */}
        {(() => {
          const beyond = dates
            .filter(d => daysUntil(d.date) > 7 && daysUntil(d.date) <= 30)
            .sort((a, b) => daysUntil(a.date) - daysUntil(b.date))
          if (!beyond.length) return null
          return (
            <div className={styles.eventsSection}>
              <p className={styles.eventsLabel}>This month</p>
              <ul className={styles.eventList}>
                {beyond.map(d => (
                  <li key={d.id} className={styles.eventItem}>
                    <span className={styles.eventName}>{d.label}</span>
                    <span className={styles.eventDays}>in {daysUntil(d.date)} days</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })()}

        {/* Meetup countdown */}
        {meetupDays !== null && meetupDays >= 0 && (
          <div className={styles.meetupCard}>
            <span className={styles.meetupNum}>{meetupDays}</span>
            <div className={styles.meetupText}>
              <span className={styles.meetupLabel}>days until you see {nickname}</span>
              {meetup.note && <span className={styles.meetupNote}>{meetup.note}</span>}
            </div>
          </div>
        )}

        {sortedUpcoming.length === 0 && !meetupDays && !showNicknamePrompt && (
          <p className={styles.emptyHint}>
            Add important dates in Calendar and set a meetup date in Meetup to see them here.
          </p>
        )}

      </main>
    </div>
  )
}
