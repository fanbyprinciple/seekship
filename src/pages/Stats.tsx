import { useState, useEffect } from 'react'
import {
  collection, query, where, getDocs,
  doc, getDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useImportantDates, daysUntil } from '../hooks/useImportantDates'
import Nav from '../components/Nav'
import PageHeader from '../components/PageHeader'
import styles from './Stats.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

interface StatsData {
  messagesSent: number
  messagesReceived: number
  panicTriggered: number
  goalsTotal: number
  goalsDone: number
  checklistTotal: number
  checklistDone: number
  daysTogther: number | null
}

export default function Stats() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = user?.uid && userData?.partnerId ? partnershipId(user.uid, userData.partnerId) : null
  const nickname = (userData?.partnerNickname as string | undefined) ?? partnerData?.displayName?.split(' ')[0] ?? 'partner'
  const { dates } = useImportantDates(pid)
  const [stats, setStats] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.uid || !userData?.partnerId || !pid) return

    const fetch = async () => {
      const [sentSnap, recvSnap, goalsSnap, checkSnap, panicSnap] = await Promise.all([
        getDocs(query(collection(db, 'messages'), where('fromUid', '==', user.uid))),
        getDocs(query(collection(db, 'messages'), where('toUid', '==', user.uid))),
        getDocs(collection(db, 'partnerships', pid, 'goals')),
        getDocs(collection(db, 'checklists', pid, 'items')),
        getDoc(doc(db, 'panics', pid)),
      ])

      const anniversary = dates.find(d => d.type === 'anniversary')
      let daysTogther: number | null = null
      if (anniversary?.year) {
        const [mm, dd] = anniversary.date.split('-').map(Number)
        const start = new Date(anniversary.year, mm - 1, dd)
        daysTogther = Math.floor((Date.now() - start.getTime()) / 86400000)
      }

      const goalsDocs = goalsSnap.docs.map(d => d.data())
      const checkDocs = checkSnap.docs.map(d => d.data())

      setStats({
        messagesSent: sentSnap.size,
        messagesReceived: recvSnap.size,
        panicTriggered: panicSnap.exists() ? (panicSnap.data()?.triggerCount ?? 0) : 0,
        goalsTotal: goalsDocs.length,
        goalsDone: goalsDocs.filter(g => g.status === 'done').length,
        checklistTotal: checkDocs.length,
        checklistDone: checkDocs.filter(c => c.checked).length,
        daysTogther,
      })
      setLoading(false)
    }

    void fetch()
  }, [user?.uid, userData?.partnerId, pid, dates])

  const anniversary = dates.find(d => d.type === 'anniversary')
  const nextAnniv = anniversary ? daysUntil(anniversary.date) : null

  return (
    <div className={styles.page}>
      <PageHeader />
      <Nav />
      <div className={styles.container}>
        <h2 className={styles.title}>Stats</h2>

        {loading && <p className={styles.loading}>Loading...</p>}

        {!loading && stats && (
          <>
            {/* Days together */}
            <div className={styles.heroCard}>
              {stats.daysTogther !== null ? (
                <>
                  <span className={styles.heroNum}>{stats.daysTogther}</span>
                  <span className={styles.heroLabel}>days together</span>
                  {nextAnniv !== null && nextAnniv <= 30 && (
                    <span className={styles.heroSub}>
                      {nextAnniv === 0 ? 'Happy anniversary!' : `Anniversary in ${nextAnniv} day${nextAnniv === 1 ? '' : 's'}`}
                    </span>
                  )}
                </>
              ) : (
                <span className={styles.heroLabel}>Add anniversary date in Calendar to see days together</span>
              )}
            </div>

            {/* Grid of stats */}
            <div className={styles.grid}>
              <StatCard value={stats.messagesSent} label={`Notes sent`} />
              <StatCard value={stats.messagesReceived} label={`Notes from ${nickname}`} />
              <StatCard
                value={`${stats.goalsDone}/${stats.goalsTotal}`}
                label="Goals achieved"
              />
              <StatCard
                value={`${stats.checklistDone}/${stats.checklistTotal}`}
                label="Checklist done"
              />
            </div>

            {/* Important upcoming dates */}
            {dates.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Coming Up</h3>
                <ul className={styles.dateList}>
                  {[...dates]
                    .sort((a, b) => daysUntil(a.date) - daysUntil(b.date))
                    .slice(0, 5)
                    .map(d => {
                      const n = daysUntil(d.date)
                      return (
                        <li key={d.id} className={styles.dateItem}>
                          <span className={styles.dateName}>{d.label}</span>
                          <span className={`${styles.daysLeft} ${n <= 7 ? styles.soon : ''}`}>
                            {n === 0 ? 'Today!' : n === 1 ? 'Tomorrow!' : `${n} days`}
                          </span>
                        </li>
                      )
                    })}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <div className={styles.statCard}>
      <span className={styles.statNum}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}
