import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useMeetup } from '../hooks/useMeetup'
import Nav from '../components/Nav'
import PageHeader from '../components/PageHeader'
import { CalendarIllustration } from '../components/Illustrations'
import styles from './Meetup.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

export default function Meetup() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = user?.uid && userData?.partnerId ? partnershipId(user.uid, userData.partnerId) : null
  const { meetup, saveMeetup, daysUntil } = useMeetup(pid)

  const [date, setDate] = useState(meetup.date ?? '')
  const [note, setNote] = useState(meetup.note ?? '')
  const [saved, setSaved] = useState(false)

  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'partner'

  const handleSave = async () => {
    if (!date) return
    await saveMeetup(date, note)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className={styles.page}>
      <PageHeader />
      <Nav />
      <div className={styles.container}>
        <div className={styles.illustration}>
          <CalendarIllustration size={90} />
        </div>
        <h2 className={styles.title}>Next Meetup</h2>
        <p className={styles.sub}>You and {partnerName}</p>

        {meetup.date && daysUntil !== null && (
          <div className={styles.countdownCard}>
            {daysUntil > 0 ? (
              <>
                <span className={styles.countNum}>{daysUntil}</span>
                <span className={styles.countLabel}>days to go</span>
              </>
            ) : daysUntil === 0 ? (
              <span className={styles.today}>Today!</span>
            ) : (
              <>
                <span className={styles.countNum}>{Math.abs(daysUntil)}</span>
                <span className={styles.countLabel}>days ago</span>
              </>
            )}
            {meetup.note && <p className={styles.meetupNote}>{meetup.note}</p>}
            <p className={styles.meetupDate}>
              {new Date(meetup.date + 'T12:00:00').toLocaleDateString('default', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          </div>
        )}

        <div className={styles.form}>
          <label className={styles.label}>Date</label>
          <input
            type="date"
            className={styles.dateInput}
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <label className={styles.label}>Note</label>
          <input
            className={styles.textInput}
            placeholder="City, occasion, plans..."
            value={note}
            onChange={e => setNote(e.target.value)}
            maxLength={80}
          />
          <button className={styles.saveBtn} onClick={() => void handleSave()} disabled={!date}>
            {saved ? 'Saved!' : 'Save Meetup'}
          </button>
        </div>
      </div>
    </div>
  )
}
