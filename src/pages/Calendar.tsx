import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useCalendar, EVENT_META, type EventType } from '../hooks/useCalendar'
import Nav from '../components/Nav'
import PageHeader from '../components/PageHeader'
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

  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [addType, setAddType] = useState<EventType>('special')
  const [addNote, setAddNote] = useState('')

  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'partner'

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

  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' })

  return (
    <div className={styles.page}>
      <PageHeader />
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
      </div>
    </div>
  )
}
