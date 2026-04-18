import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useChecklist } from '../hooks/useChecklist'
import Nav from '../components/Nav'
import styles from './Checklist.module.css'

export default function Checklist() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const { items, addItem, toggleItem, deleteItem } = useChecklist(user?.uid, userData?.partnerId)
  const [input, setInput] = useState('')

  const partnerName = partnerData?.displayName?.split(' ')[0] ?? 'partner'

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    await addItem(input)
    setInput('')
  }

  const done = items.filter((i) => i.checked).length

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our List</h2>
          <p className={styles.sub}>
            Shared with {partnerName} · {done}/{items.length} done
          </p>
        </div>

        <form className={styles.addForm} onSubmit={(e) => void handleAdd(e)}>
          <input
            className={styles.input}
            placeholder="Add something to your list..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={120}
          />
          <button className={styles.addBtn} type="submit">Add</button>
        </form>

        <ul className={styles.list}>
          {items.length === 0 && (
            <li className={styles.empty}>Nothing here yet. Add something above ↑</li>
          )}
          {items.map((item) => (
            <li key={item.id} className={`${styles.item} ${item.checked ? styles.itemDone : ''}`}>
              <button
                className={`${styles.checkbox} ${item.checked ? styles.checked : ''}`}
                onClick={() => void toggleItem(item.id, !item.checked)}
                aria-label={item.checked ? 'Mark undone' : 'Mark done'}
              >
                {item.checked ? '✓' : ''}
              </button>
              <span className={styles.itemText}>{item.text}</span>
              <span className={styles.addedBy}>
                {item.addedBy === user?.uid ? 'you' : partnerName}
              </span>
              <button
                className={styles.deleteBtn}
                onClick={() => void deleteItem(item.id)}
                aria-label="Delete item"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
