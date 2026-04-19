import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useGoals, type GoalStatus, type GoalCategory } from '../hooks/useGoals'
import Nav from '../components/Nav'
import PageHeader from '../components/PageHeader'
import styles from './Goals.module.css'

function partnershipId(a: string, b: string) { return [a, b].sort().join('_') }

const STATUS_LABELS: Record<GoalStatus, string> = {
  not_started: 'Not started',
  in_progress: 'In progress',
  done: 'Done',
}
const STATUS_NEXT: Record<GoalStatus, GoalStatus> = {
  not_started: 'in_progress',
  in_progress: 'done',
  done: 'not_started',
}
const CATEGORIES: GoalCategory[] = ['relationship', 'travel', 'personal', 'financial', 'health']

export default function Goals() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = user?.uid && userData?.partnerId ? partnershipId(user.uid, userData.partnerId) : null
  const { goals, addGoal, updateStatus, deleteGoal } = useGoals(pid)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState<GoalCategory>('relationship')
  const [targetDate, setTargetDate] = useState('')
  const [filter, setFilter] = useState<GoalStatus | 'all'>('all')
  const [showForm, setShowForm] = useState(false)

  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'partner'

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !user?.uid) return
    await addGoal({
      title: title.trim(),
      description: description.trim(),
      category,
      status: 'not_started',
      targetDate,
      addedBy: user.uid,
    })
    setTitle(''); setDescription(''); setTargetDate('')
    setShowForm(false)
  }

  const filtered = filter === 'all' ? goals : goals.filter(g => g.status === filter)
  const done = goals.filter(g => g.status === 'done').length

  return (
    <div className={styles.page}>
      <PageHeader />
      <Nav />
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Goals</h2>
            <p className={styles.sub}>You and {partnerName} — {done}/{goals.length} done</p>
          </div>
          <button className={styles.addBtn} onClick={() => setShowForm(f => !f)}>
            {showForm ? 'Cancel' : '+ New goal'}
          </button>
        </div>

        {showForm && (
          <form className={styles.addForm} onSubmit={e => void handleAdd(e)}>
            <input className={styles.input} placeholder="Goal title..." value={title} onChange={e => setTitle(e.target.value)} maxLength={80} />
            <textarea className={styles.textarea} placeholder="Description (optional)" value={description} onChange={e => setDescription(e.target.value)} rows={2} maxLength={200} />
            <div className={styles.row}>
              <select className={styles.select} value={category} onChange={e => setCategory(e.target.value as GoalCategory)}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
              </select>
              <input type="date" className={styles.dateInput} value={targetDate} onChange={e => setTargetDate(e.target.value)} />
            </div>
            <button className={styles.submitBtn} type="submit">Add Goal</button>
          </form>
        )}

        <div className={styles.filterRow}>
          {(['all', 'not_started', 'in_progress', 'done'] as const).map(f => (
            <button key={f} className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : STATUS_LABELS[f]}
            </button>
          ))}
        </div>

        <ul className={styles.list}>
          {filtered.length === 0 && <li className={styles.empty}>No goals yet.</li>}
          {filtered.map(g => (
            <li key={g.id} className={`${styles.item} ${g.status === 'done' ? styles.itemDone : ''}`}>
              <div className={styles.itemHeader}>
                <span className={`${styles.categoryTag} ${styles[`cat_${g.category}`]}`}>{g.category}</span>
                <button className={`${styles.statusBtn} ${styles[`status_${g.status}`]}`} onClick={() => void updateStatus(g.id, STATUS_NEXT[g.status])}>
                  {STATUS_LABELS[g.status]}
                </button>
                <button className={styles.deleteBtn} onClick={() => void deleteGoal(g.id)}>x</button>
              </div>
              <p className={styles.goalTitle}>{g.title}</p>
              {g.description && <p className={styles.goalDesc}>{g.description}</p>}
              <div className={styles.goalMeta}>
                {g.targetDate && <span>By {new Date(g.targetDate + 'T12:00:00').toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}</span>}
                <span>Added by {g.addedBy === user?.uid ? 'you' : partnerName}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
