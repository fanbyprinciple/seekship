import { useState, useEffect } from 'react'
import {
  collection, query, where, getDocs, getCountFromServer, limit,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useImportantDates, daysUntil } from '../hooks/useImportantDates'
import Nav from '../components/Nav'
import TopBar from '../components/TopBar'
import styles from './Stats.module.css'
import { maybePartnershipId, partnerNickname } from '../utils/partnership'

interface PlayerStats {
  messagesSent: number
  messagesRecv: number
  goalsCreated: number
  goalsDone: number
  tasksCreated: number
  tasksDone: number
  moviesAdded: number
  moviesFinished: number
  wishlistAdded: number
}

interface CompareResult {
  mine: PlayerStats
  theirs: PlayerStats
  sharedMovies: number
  sharedTasks: number
  totalMessages: number
  daysTogether: number | null
}

const EMPTY_STATS: PlayerStats = {
  messagesSent: 0, messagesRecv: 0,
  goalsCreated: 0, goalsDone: 0,
  tasksCreated: 0, tasksDone: 0,
  moviesAdded: 0, moviesFinished: 0,
  wishlistAdded: 0,
}

function winner(a: number, b: number): 'me' | 'them' | 'tie' {
  if (a > b) return 'me'
  if (b > a) return 'them'
  return 'tie'
}

export default function Stats() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = maybePartnershipId(user?.uid, userData?.partnerId as string | undefined)
  const nickname = partnerNickname(userData, partnerData, 'Partner')
  const myName = user?.displayName?.split(' ')[0] ?? 'You'
  const { dates } = useImportantDates(pid)
  const [result, setResult] = useState<CompareResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.uid || !userData?.partnerId || !pid) return
    const myUid = user.uid
    const partnerId = userData.partnerId as string

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const [
          mySentCount, theirSentCount,
          goalsSnap, checkSnap, moviesSnap, wishSnap,
        ] = await Promise.all([
          getCountFromServer(query(
            collection(db, 'messages'),
            where('fromUid', '==', myUid),
            where('toUid', '==', partnerId),
          )),
          getCountFromServer(query(
            collection(db, 'messages'),
            where('fromUid', '==', partnerId),
            where('toUid', '==', myUid),
          )),
          getDocs(query(collection(db, 'partnerships', pid, 'goals'), limit(500))),
          getDocs(query(collection(db, 'checklists', pid, 'items'), limit(500))),
          getDocs(query(collection(db, 'partnerships', pid, 'movies'), limit(500))),
          getDocs(query(collection(db, 'partnerships', pid, 'wishlist'), limit(500))),
        ])

        const goals = goalsSnap.docs.map(d => d.data())
        const tasks = checkSnap.docs.map(d => d.data())
        const movies = moviesSnap.docs.map(d => d.data())
        const wishes = wishSnap.docs.map(d => d.data())

        const mine: PlayerStats = {
          messagesSent: mySentCount.data().count,
          messagesRecv: theirSentCount.data().count,
          goalsCreated: goals.filter(g => g.addedBy === myUid).length,
          goalsDone: goals.filter(g => g.addedBy === myUid && g.status === 'done').length,
          tasksCreated: tasks.filter(t => t.addedBy === myUid).length,
          tasksDone: tasks.filter(t => t.addedBy === myUid && t.checked).length,
          moviesAdded: movies.filter(m => m.addedBy === myUid).length,
          moviesFinished: movies.filter(m => m.addedBy === myUid && m.status === 'finished').length,
          wishlistAdded: wishes.filter(w => w.addedBy === myUid).length,
        }
        const theirs: PlayerStats = {
          messagesSent: theirSentCount.data().count,
          messagesRecv: mySentCount.data().count,
          goalsCreated: goals.filter(g => g.addedBy === partnerId).length,
          goalsDone: goals.filter(g => g.addedBy === partnerId && g.status === 'done').length,
          tasksCreated: tasks.filter(t => t.addedBy === partnerId).length,
          tasksDone: tasks.filter(t => t.addedBy === partnerId && t.checked).length,
          moviesAdded: movies.filter(m => m.addedBy === partnerId).length,
          moviesFinished: movies.filter(m => m.addedBy === partnerId && m.status === 'finished').length,
          wishlistAdded: wishes.filter(w => w.addedBy === partnerId).length,
        }

        const anniversary = dates.find(d => d.type === 'anniversary')
        let daysTogether: number | null = null
        if (anniversary?.year) {
          const [mm, dd] = anniversary.date.split('-').map(Number)
          const start = new Date(anniversary.year, mm - 1, dd)
          daysTogether = Math.floor((Date.now() - start.getTime()) / 86400000)
        }

        setResult({
          mine, theirs,
          sharedMovies: movies.filter(m => m.status === 'finished').length,
          sharedTasks: tasks.filter(t => t.checked).length,
          totalMessages: mine.messagesSent + theirs.messagesSent,
          daysTogether,
        })
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load stats.')
      } finally {
        setLoading(false)
      }
    }

    void load()
  }, [user?.uid, userData?.partnerId, pid, dates])

  const anniversary = dates.find(d => d.type === 'anniversary')
  const nextAnniv = anniversary ? daysUntil(anniversary.date) : null

  const mine = result?.mine ?? EMPTY_STATS
  const theirs = result?.theirs ?? EMPTY_STATS

  const categories: { label: string; myVal: number; theirVal: number; emoji: string }[] = [
    { label: 'Notes sent',       myVal: mine.messagesSent,   theirVal: theirs.messagesSent,   emoji: '💌' },
    { label: 'Goals done',       myVal: mine.goalsDone,      theirVal: theirs.goalsDone,      emoji: '🎯' },
    { label: 'Tasks checked',    myVal: mine.tasksDone,      theirVal: theirs.tasksDone,      emoji: '✅' },
    { label: 'Movies finished',  myVal: mine.moviesFinished, theirVal: theirs.moviesFinished, emoji: '🎬' },
    { label: 'Wishes added',     myVal: mine.wishlistAdded,  theirVal: theirs.wishlistAdded,  emoji: '🎁' },
    { label: 'Tasks created',    myVal: mine.tasksCreated,   theirVal: theirs.tasksCreated,   emoji: '📝' },
    { label: 'Goals set',        myVal: mine.goalsCreated,   theirVal: theirs.goalsCreated,   emoji: '⭐' },
  ]

  const myWins = categories.filter(c => winner(c.myVal, c.theirVal) === 'me').length
  const theirWins = categories.filter(c => winner(c.myVal, c.theirVal) === 'them').length
  const champion = myWins > theirWins ? myName : theirWins > myWins ? nickname : null

  const avgPerDay = result?.daysTogether && result.daysTogether > 0
    ? (result.totalMessages / result.daysTogether).toFixed(1)
    : null

  return (
    <div className={styles.page}>
      <TopBar />
      <Nav />
      <div className={styles.container}>

        {/* Hero: days together */}
        {result?.daysTogether !== null && result?.daysTogether !== undefined ? (
          <div className={styles.heroCard}>
            <span className={styles.heroNum}>{result.daysTogether}</span>
            <span className={styles.heroLabel}>days together</span>
            {nextAnniv !== null && nextAnniv <= 30 && (
              <span className={styles.heroSub}>
                {nextAnniv === 0 ? '🎉 Happy anniversary!' : `Anniversary in ${nextAnniv} day${nextAnniv === 1 ? '' : 's'}`}
              </span>
            )}
          </div>
        ) : (
          <div className={styles.heroCard}>
            <span className={styles.heroLabel}>Add anniversary in Calendar to see days together</span>
          </div>
        )}

        {loading && <p className={styles.loading}>Loading stats...</p>}
        {error && <p className={styles.loading}>Stats error: {error}</p>}

        {!loading && !error && result && (
          <>
            {/* Shared totals */}
            <div className={styles.sharedGrid}>
              <div className={styles.sharedTile}>
                <span className={styles.sharedNum}>{result.totalMessages}</span>
                <span className={styles.sharedLabel}>Total notes exchanged</span>
              </div>
              <div className={styles.sharedTile}>
                <span className={styles.sharedNum}>{result.sharedTasks}</span>
                <span className={styles.sharedLabel}>Shared tasks done</span>
              </div>
              <div className={styles.sharedTile}>
                <span className={styles.sharedNum}>{result.sharedMovies}</span>
                <span className={styles.sharedLabel}>Movies watched together</span>
              </div>
              {avgPerDay !== null && (
                <div className={styles.sharedTile}>
                  <span className={styles.sharedNum}>{avgPerDay}</span>
                  <span className={styles.sharedLabel}>Notes / day avg</span>
                </div>
              )}
            </div>

            {/* Championship banner */}
            <div className={styles.champ}>
              <span className={styles.champCrown}>🏆</span>
              <span className={styles.champText}>
                {champion ? `${champion} is winning!` : "It's a tie!"}
              </span>
              <div className={styles.champScore}>
                <span className={myWins >= theirWins ? styles.scoreWin : styles.scoreLose}>{myWins}</span>
                <span className={styles.scoreDash}>–</span>
                <span className={theirWins >= myWins ? styles.scoreWin : styles.scoreLose}>{theirWins}</span>
              </div>
              <div className={styles.champNames}>
                <span>{myName}</span>
                <span>{nickname}</span>
              </div>
            </div>

            {/* Category rows */}
            <div className={styles.battleList}>
              {categories.map(cat => {
                const w = winner(cat.myVal, cat.theirVal)
                return (
                  <div key={cat.label} className={styles.battleRow}>
                    <div className={`${styles.playerCell} ${w === 'me' ? styles.winCell : w === 'tie' ? styles.tieCell : styles.loseCell}`}>
                      <span className={styles.playerNum}>{cat.myVal}</span>
                    </div>
                    <div className={styles.battleMid}>
                      <span className={styles.catEmoji}>{cat.emoji}</span>
                      <span className={styles.catLabel}>{cat.label}</span>
                      {w === 'me' && <span className={styles.winTag}>← wins</span>}
                      {w === 'them' && <span className={styles.winTag}>wins →</span>}
                      {w === 'tie' && <span className={styles.tieTag}>tie</span>}
                    </div>
                    <div className={`${styles.playerCell} ${w === 'them' ? styles.winCell : w === 'tie' ? styles.tieCell : styles.loseCell}`}>
                      <span className={styles.playerNum}>{cat.theirVal}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Name row */}
            <div className={styles.nameRow}>
              <span className={styles.nameTag}>{myName}</span>
              <span className={styles.nameTag}>{nickname}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
