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
import TopBar from '../components/TopBar'
import styles from './Stats.module.css'
import { maybePartnershipId, partnerNickname } from '../utils/partnership'

interface PlayerStats {
  messagesSent: number
  goalsTotal: number
  goalsDone: number
  checklistTotal: number
  checklistDone: number
  panics: number
  moviesWatched: number
  wishlistItems: number
}

interface CompareResult {
  mine: PlayerStats
  theirs: PlayerStats
  daysTogther: number | null
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.uid || !userData?.partnerId || !pid) return
    const partnerId = userData.partnerId as string

    const load = async () => {
      const [
        mySentSnap, theirSentSnap,
        goalsSnap, checkSnap,
        panicSnap,
        moviesSnap,
        wishSnap,
      ] = await Promise.all([
        getDocs(query(collection(db, 'messages'), where('fromUid', '==', user.uid))),
        getDocs(query(collection(db, 'messages'), where('fromUid', '==', partnerId))),
        getDocs(collection(db, 'partnerships', pid, 'goals')),
        getDocs(collection(db, 'checklists', pid, 'items')),
        getDoc(doc(db, 'panics', pid)),
        getDocs(collection(db, 'partnerships', pid, 'movies')),
        getDocs(collection(db, 'wishlists', pid, 'items')),
      ])

      const goalDocs = goalsSnap.docs.map(d => d.data())
      const checkDocs = checkSnap.docs.map(d => d.data())
      const panicData = panicSnap.exists() ? panicSnap.data() : null

      const anniversary = dates.find(d => d.type === 'anniversary')
      let daysTogther: number | null = null
      if (anniversary?.year) {
        const [mm, dd] = anniversary.date.split('-').map(Number)
        const start = new Date(anniversary.year, mm - 1, dd)
        daysTogther = Math.floor((Date.now() - start.getTime()) / 86400000)
      }

      const myGoalsDone = goalDocs.filter(g => g.createdBy === user.uid && g.status === 'done').length
      const theirGoalsDone = goalDocs.filter(g => g.createdBy === partnerId && g.status === 'done').length
      const myGoalsTotal = goalDocs.filter(g => g.createdBy === user.uid).length
      const theirGoalsTotal = goalDocs.filter(g => g.createdBy === partnerId).length

      const myCheckDone = checkDocs.filter(c => c.createdBy === user.uid && c.checked).length
      const theirCheckDone = checkDocs.filter(c => c.createdBy === partnerId && c.checked).length
      const myCheckTotal = checkDocs.filter(c => c.createdBy === user.uid).length
      const theirCheckTotal = checkDocs.filter(c => c.createdBy === partnerId).length

      const moviesWatched = moviesSnap.docs.filter(d => d.data().watched).length
      const wishlistCount = wishSnap.size

      setResult({
        daysTogther,
        mine: {
          messagesSent: mySentSnap.size,
          goalsTotal: myGoalsTotal,
          goalsDone: myGoalsDone,
          checklistTotal: myCheckTotal,
          checklistDone: myCheckDone,
          panics: panicData?.triggeredBy === user.uid ? (panicData?.triggerCount ?? 0) : 0,
          moviesWatched,
          wishlistItems: wishlistCount,
        },
        theirs: {
          messagesSent: theirSentSnap.size,
          goalsTotal: theirGoalsTotal,
          goalsDone: theirGoalsDone,
          checklistTotal: theirCheckTotal,
          checklistDone: theirCheckDone,
          panics: panicData?.triggeredBy === partnerId ? (panicData?.triggerCount ?? 0) : 0,
          moviesWatched,
          wishlistItems: wishlistCount,
        },
      })
      setLoading(false)
    }

    void load()
  }, [user?.uid, userData?.partnerId, pid, dates])

  const anniversary = dates.find(d => d.type === 'anniversary')
  const nextAnniv = anniversary ? daysUntil(anniversary.date) : null

  const categories: { label: string; myVal: number; theirVal: number; emoji: string }[] = result ? [
    { label: 'Notes sent', myVal: result.mine.messagesSent, theirVal: result.theirs.messagesSent, emoji: '💌' },
    { label: 'Goals done', myVal: result.mine.goalsDone, theirVal: result.theirs.goalsDone, emoji: '🎯' },
    { label: 'Tasks checked', myVal: result.mine.checklistDone, theirVal: result.theirs.checklistDone, emoji: '✅' },
  ] : []

  const myWins = categories.filter(c => winner(c.myVal, c.theirVal) === 'me').length
  const theirWins = categories.filter(c => winner(c.myVal, c.theirVal) === 'them').length
  const champion = myWins > theirWins ? myName : theirWins > myWins ? nickname : null

  return (
    <div className={styles.page}>
      <TopBar />
      <Nav />
      <div className={styles.container}>

        {/* Hero: days together */}
        {result?.daysTogther !== null && result?.daysTogther !== undefined ? (
          <div className={styles.heroCard}>
            <span className={styles.heroNum}>{result.daysTogther}</span>
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

        {!loading && result && (
          <>
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
