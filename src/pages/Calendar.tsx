import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useCalendar, EVENT_META, type EventType } from '../hooks/useCalendar'
import { useImportantDates, daysUntil, type DateType } from '../hooks/useImportantDates'
import { useMood, MOOD_OPTIONS } from '../hooks/useMood'
import Nav from '../components/Nav'
import TopBar from '../components/TopBar'
import styles from './Calendar.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

function toYMD(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

export default function Calendar() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = user?.uid && userData?.partnerId ? partnershipId(user.uid, userData.partnerId) : null
  const { events, addEvent, deleteEvent } = useCalendar(pid)
  const { dates, addDate, removeDate } = useImportantDates(pid)
  const { myMood, partnerMood, logMood } = useMood(pid, user?.uid, userData?.partnerId as string | undefined)
  const [showDateForm, setShowDateForm] = useState(false)
  const [dateLabel, setDateLabel] = useState('')
  const [dateMMDD, setDateMMDD] = useState('')
  const [dateType, setDateType] = useState<DateType>('birthday')
  const [showFriendForm, setShowFriendForm] = useState(false)
  const [friendLabel, setFriendLabel] = useState('')
  const [friendMMDD, setFriendMMDD] = useState('')

  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [addType, setAddType] = useState<EventType>('special')
  const [addNote, setAddNote] = useState('')

  const partnerName = (userData?.partnerNickname as string | undefined) ?? partnerData?.displayName?.split(' ')[0] ?? 'partner'

  // Build calendar grid
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null)

  const eventsThisMonth = events.filter(e => {
    const [y, m] = e.date.split('-').map(Number)
    return y === year && m === month + 1
  })

  const eventsByDate: Record<string, typeof eventsThisMonth> = {}
  eventsThisMonth.forEach(e => {
    if (!eventsByDate[e.date]) eventsByDate[e.date] = []
    eventsByDate[e.date].push(e)
  })

  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] ?? []) : []

  const handleAddEvent = async () => {
    if (!selectedDate || !user?.uid) return
    await addEvent(addType, selectedDate, addNote, user.uid)
    setAddNote('')
  }

  const handleAddDate = async () => {
    if (!dateLabel.trim() || !dateMMDD || !user?.uid) return
    await addDate({ label: dateLabel.trim(), date: dateMMDD, type: dateType, createdBy: user.uid })
    setDateLabel('')
    setDateMMDD('')
    setShowDateForm(false)
  }

  const handleAddFriendDate = async () => {
    if (!friendLabel.trim() || !friendMMDD || !user?.uid) return
    await addDate({ label: friendLabel.trim(), date: friendMMDD, type: 'friend_birthday', createdBy: user.uid })
    setFriendLabel('')
    setFriendMMDD('')
    setShowFriendForm(false)
  }

  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' })

  return (
    <div className={styles.page}>
      <TopBar />
      <Nav />
      <div className={styles.container}>

        {/* Month nav */}
        <div className={styles.monthNav}>
          <button className={styles.navBtn} onClick={() => {
            if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1)
          }}>←</button>
          <span className={styles.monthTitle}>{monthName} {year}</span>
          <button className={styles.navBtn} onClick={() => {
            if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1)
          }}>→</button>
        </div>

        {/* Day labels */}
        <div className={styles.dayLabels}>
          {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
            <span key={d} className={styles.dayLabel}>{d}</span>
          ))}
        </div>

        {/* Calendar grid */}
        <div className={styles.grid}>
          {cells.map((day, i) => {
            if (!day) return <div key={i} className={styles.emptyCell} />
            const dateStr = toYMD(year, month, day)
            const dayEvents = eventsByDate[dateStr] ?? []
            const isToday = dateStr === toYMD(today.getFullYear(), today.getMonth(), today.getDate())
            const isSelected = dateStr === selectedDate

            return (
              <button
                key={i}
                className={`${styles.cell} ${isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`}
                onClick={() => setSelectedDate(dateStr === selectedDate ? null : dateStr)}
              >
                <span className={styles.dayNum}>{day}</span>
                <div className={styles.dots}>
                  {dayEvents.slice(0, 3).map((e, j) => (
                    <span key={j} className={styles.dot} style={{ background: EVENT_META[e.type].color }} />
                  ))}
                </div>
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          {(Object.keys(EVENT_META) as EventType[]).map(type => (
            <span key={type} className={styles.legendItem}>
              <span className={styles.dot} style={{ background: EVENT_META[type].color }} />
              {EVENT_META[type].emoji} {EVENT_META[type].label}
            </span>
          ))}
        </div>

        {/* Mood tracker */}
        <div className={styles.moodSection}>
          <div className={styles.moodHeader}>
            <span className={styles.moodTitle}>Today's mood</span>
            {partnerMood && (
              <span className={styles.partnerMoodDisplay}>
                {partnerName}: {MOOD_OPTIONS.find(m => m.mood === partnerMood)?.emoji}
              </span>
            )}
          </div>
          <div className={styles.moodBtns}>
            {MOOD_OPTIONS.map(({ mood, emoji, label }) => (
              <button
                key={mood}
                className={`${styles.moodBtn} ${myMood === mood ? styles.moodActive : ''}`}
                onClick={() => void logMood(mood)}
                title={label}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Selected day panel */}
        {selectedDate && (
          <div className={styles.dayPanel}>
            <h3 className={styles.dayPanelTitle}>
              {new Date(selectedDate + 'T12:00:00').toLocaleDateString('default', {
                weekday: 'long', month: 'long', day: 'numeric'
              })}
            </h3>

            {selectedEvents.length > 0 && (
              <ul className={styles.eventList}>
                {selectedEvents.map(e => (
                  <li key={e.id} className={styles.eventItem} style={{ borderLeftColor: EVENT_META[e.type].color }}>
                    <span>{EVENT_META[e.type].emoji} <strong>{EVENT_META[e.type].label}</strong></span>
                    {e.note && <span className={styles.eventNote}>{e.note}</span>}
                    <span className={styles.eventBy}>
                      {e.addedBy === user?.uid ? 'you' : partnerName}
                    </span>
                    <button className={styles.deleteBtn} onClick={() => void deleteEvent(e.id)}>×</button>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.addEventForm}>
              <div className={styles.typeRow}>
                {(Object.keys(EVENT_META) as EventType[]).map(type => (
                  <button
                    key={type}
                    className={`${styles.typeBtn} ${addType === type ? styles.typeBtnActive : ''}`}
                    style={addType === type ? { background: EVENT_META[type].color, borderColor: EVENT_META[type].color } : {}}
                    onClick={() => setAddType(type)}
                  >
                    {EVENT_META[type].emoji}
                  </button>
                ))}
              </div>
              <input
                className={styles.noteInput}
                placeholder={`Add ${EVENT_META[addType].label} note (optional)`}
                value={addNote}
                onChange={e => setAddNote(e.target.value)}
                maxLength={80}
              />
              <button className={styles.addBtn} onClick={() => void handleAddEvent()}>
                Add {EVENT_META[addType].label}
              </button>
            </div>
          </div>
        )}
        {/* Important Dates — couple */}
        <div className={styles.importantSection}>
          <div className={styles.importantHeader}>
            <h3 className={styles.importantTitle}>Important Dates</h3>
            <button className={styles.addDateBtn} onClick={() => setShowDateForm(f => !f)}>
              {showDateForm ? 'Cancel' : '+ Add'}
            </button>
          </div>

          {showDateForm && (
            <div className={styles.dateForm}>
              <input
                className={styles.noteInput}
                placeholder="Label (e.g. Our anniversary)"
                value={dateLabel}
                onChange={e => setDateLabel(e.target.value)}
                maxLength={50}
              />
              <div className={styles.typeRow}>
                {(['anniversary', 'birthday', 'custom'] as DateType[]).map(t => (
                  <button
                    key={t}
                    className={`${styles.typeBtn} ${dateType === t ? styles.typeBtnActive : ''}`}
                    onClick={() => setDateType(t)}
                  >
                    {t === 'anniversary' ? 'Anniv.' : t === 'birthday' ? 'Birthday' : 'Custom'}
                  </button>
                ))}
              </div>
              <input
                className={styles.noteInput}
                type="date"
                value={dateMMDD ? `${new Date().getFullYear()}-${dateMMDD}` : ''}
                onChange={e => {
                  const v = e.target.value
                  if (v) setDateMMDD(v.substring(5))
                }}
              />
              <button className={styles.addBtn} onClick={() => void handleAddDate()}>Save Date</button>
            </div>
          )}

          {dates.filter(d => d.type !== 'friend_birthday').length === 0 && !showDateForm && (
            <p className={styles.emptyDates}>No important dates yet.</p>
          )}

          <ul className={styles.dateList}>
            {[...dates].filter(d => d.type !== 'friend_birthday').sort((a, b) => daysUntil(a.date) - daysUntil(b.date)).map(d => {
              const n = daysUntil(d.date)
              return (
                <li key={d.id} className={styles.dateItem}>
                  <div className={styles.dateInfo}>
                    <span className={styles.dateName}>{d.label}</span>
                    <span className={styles.dateMMDD}>{d.date}</span>
                  </div>
                  <span className={`${styles.daysLeft} ${n <= 1 ? styles.soon : ''}`}>
                    {n === 0 ? 'Today!' : n === 1 ? 'Tomorrow!' : `${n}d`}
                  </span>
                  <button className={styles.deleteBtn} onClick={() => void removeDate(d.id)}>×</button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Friends & Family Birthdays */}
        <div className={styles.importantSection}>
          <div className={styles.importantHeader}>
            <h3 className={styles.importantTitle}>Friends & Family 🎂</h3>
            <button className={styles.addDateBtn} onClick={() => setShowFriendForm(f => !f)}>
              {showFriendForm ? 'Cancel' : '+ Add'}
            </button>
          </div>

          {showFriendForm && (
            <div className={styles.dateForm}>
              <input
                className={styles.noteInput}
                placeholder="Name (e.g. Mom's birthday)"
                value={friendLabel}
                onChange={e => setFriendLabel(e.target.value)}
                maxLength={50}
              />
              <input
                className={styles.noteInput}
                type="date"
                value={friendMMDD ? `${new Date().getFullYear()}-${friendMMDD}` : ''}
                onChange={e => {
                  const v = e.target.value
                  if (v) setFriendMMDD(v.substring(5))
                }}
              />
              <button className={styles.addBtn} onClick={() => void handleAddFriendDate()}>Save Birthday</button>
            </div>
          )}

          {dates.filter(d => d.type === 'friend_birthday').length === 0 && !showFriendForm && (
            <p className={styles.emptyDates}>No birthdays added yet. Reminders appear on Home 7 days before.</p>
          )}

          <ul className={styles.dateList}>
            {[...dates].filter(d => d.type === 'friend_birthday').sort((a, b) => daysUntil(a.date) - daysUntil(b.date)).map(d => {
              const n = daysUntil(d.date)
              return (
                <li key={d.id} className={`${styles.dateItem} ${styles.friendBirthday}`}>
                  <div className={styles.dateInfo}>
                    <span className={styles.dateName}>🎂 {d.label}</span>
                    <span className={styles.dateMMDD}>{d.date}</span>
                  </div>
                  <span className={`${styles.daysLeft} ${n <= 7 ? styles.soon : ''}`}>
                    {n === 0 ? 'Today!' : n === 1 ? 'Tomorrow!' : `${n}d`}
                  </span>
                  <button className={styles.deleteBtn} onClick={() => void removeDate(d.id)}>×</button>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}
