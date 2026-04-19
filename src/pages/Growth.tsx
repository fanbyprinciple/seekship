import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useGrowth, type GrowthTarget, type GrowthStatus, type GrowthItem } from '../hooks/useGrowth'
import Nav from '../components/Nav'
import TopBar from '../components/TopBar'
import styles from './Growth.module.css'
import { maybePartnershipId, partnerNickname } from '../utils/partnership'

const STATUS_LABEL: Record<GrowthStatus, string> = {
  open: 'Open',
  working: 'Working on it',
  resolved: 'Resolved',
}
const STATUS_NEXT: Record<GrowthStatus, GrowthStatus> = {
  open: 'working',
  working: 'resolved',
  resolved: 'open',
}

export default function Growth() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = maybePartnershipId(user?.uid, userData?.partnerId as string | undefined)
  const nickname = partnerNickname(userData, partnerData, 'partner')
  const { items, loading, addItem, updateStatus, deleteItem } = useGrowth(pid)

  const [text, setText] = useState('')
  const [target, setTarget] = useState<GrowthTarget>('us')
  const [filter, setFilter] = useState<GrowthTarget | 'all'>('all')

  const TARGET_LABEL: Record<GrowthTarget, string> = {
    me: 'On me',
    them: `On ${nickname}`,
    us: 'On us both',
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim() || !user?.uid) return
    void addItem(text, target, user.uid)
    setText('')
  }

  const visible = filter === 'all'
    ? items
    : items.filter(i => i.target === filter)

  const byStatus: Record<GrowthStatus, GrowthItem[]> = {
    open: visible.filter(i => i.status === 'open'),
    working: visible.filter(i => i.status === 'working'),
    resolved: visible.filter(i => i.status === 'resolved'),
  }

  return (
    <div className={styles.page}>
      <TopBar />
      <Nav />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Constructive criticism</h1>
          <p className={styles.subtitle}>
            Things each of us can work on — honest, kind, and tracked together.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleAdd}>
          <textarea
            className={styles.textarea}
            placeholder="Something you'd like us to work on…"
            value={text}
            maxLength={280}
            onChange={e => setText(e.target.value)}
            rows={2}
          />
          <div className={styles.targetRow}>
            {(['me', 'us', 'them'] as GrowthTarget[]).map(t => (
              <button
                type="button"
                key={t}
                className={`${styles.targetBtn} ${target === t ? styles.targetActive : ''}`}
                onClick={() => setTarget(t)}
              >
                {TARGET_LABEL[t]}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!text.trim()}
          >
            Add
          </button>
        </form>

        <div className={styles.filterRow}>
          {(['all', 'me', 'us', 'them'] as const).map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'me' ? 'On me' : f === 'us' ? 'On us' : `On ${nickname}`}
            </button>
          ))}
        </div>

        {loading && <p className={styles.empty}>Loading…</p>}

        {!loading && visible.length === 0 && (
          <p className={styles.empty}>
            Nothing here yet. Be honest, be kind — and only add what you're willing to say out loud.
          </p>
        )}

        {!loading && (['open', 'working', 'resolved'] as GrowthStatus[]).map(status => {
          const rows = byStatus[status]
          if (!rows.length) return null
          return (
            <section key={status} className={styles.section}>
              <h2 className={styles.sectionTitle}>
                {STATUS_LABEL[status]} <span className={styles.sectionCount}>{rows.length}</span>
              </h2>
              <ul className={styles.list}>
                {rows.map(it => {
                  const mine = it.addedBy === user?.uid
                  return (
                    <li key={it.id} className={`${styles.item} ${styles[`target_${it.target}`]}`}>
                      <div className={styles.itemBody}>
                        <span className={`${styles.targetTag} ${styles[`tag_${it.target}`]}`}>
                          {TARGET_LABEL[it.target]}
                        </span>
                        <p className={styles.text}>{it.text}</p>
                        <span className={styles.meta}>
                          added by {mine ? 'you' : nickname}
                        </span>
                      </div>
                      <div className={styles.actions}>
                        <button
                          className={styles.statusBtn}
                          onClick={() => void updateStatus(it.id, STATUS_NEXT[it.status])}
                          title="Advance status"
                        >
                          → {STATUS_LABEL[STATUS_NEXT[it.status]]}
                        </button>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => void deleteItem(it.id)}
                          aria-label="Delete"
                        >
                          ×
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
