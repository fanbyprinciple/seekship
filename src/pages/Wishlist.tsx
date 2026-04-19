import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useWishlist, type WishPriority } from '../hooks/useWishlist'
import Nav from '../components/Nav'
import TopBar from '../components/TopBar'
import { StarIllustration } from '../components/Illustrations'
import styles from './Wishlist.module.css'
import { maybePartnershipId, partnerNickname } from '../utils/partnership'

const PRIORITY_LABELS: Record<WishPriority, string> = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
}

export default function Wishlist() {
  const { user } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const pid = maybePartnershipId(user?.uid, userData?.partnerId as string | undefined)
  const { items, addItem, markGifted, deleteItem } = useWishlist(pid)

  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [priority, setPriority] = useState<WishPriority>('medium')
  const [filter, setFilter] = useState<'all' | 'mine' | 'theirs'>('all')

  const partnerName = partnerNickname(userData, partnerData)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !user?.uid) return
    void addItem(title.trim(), link.trim(), priority, user.uid)
    setTitle('')
    setLink('')
    setPriority('medium')
  }

  const filtered = items.filter(i => {
    if (filter === 'mine') return i.addedBy === user?.uid
    if (filter === 'theirs') return i.addedBy !== user?.uid
    return true
  })

  return (
    <div className={styles.page}>
      <TopBar />
      <Nav />
      <div className={styles.container}>
        <div className={styles.illustration}><StarIllustration size={70} /></div>
        <h2 className={styles.title}>Gift Wishlist</h2>
        <p className={styles.sub}>What you and {partnerName} would love</p>

        <form className={styles.addForm} onSubmit={handleAdd}>
          <input
            className={styles.input}
            placeholder="Gift idea..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            maxLength={100}
          />
          <input
            className={styles.input}
            placeholder="Link (optional)"
            value={link}
            onChange={e => setLink(e.target.value)}
            maxLength={200}
          />
          <div className={styles.priorityRow}>
            <span className={styles.priorityLabel}>Priority:</span>
            {(['low', 'medium', 'high'] as WishPriority[]).map(p => (
              <button
                key={p}
                type="button"
                className={`${styles.priorityBtn} ${priority === p ? styles[`priority_${p}`] : ''}`}
                onClick={() => setPriority(p)}
              >
                {PRIORITY_LABELS[p]}
              </button>
            ))}
          </div>
          <button className={styles.addBtn} type="submit">Add to list</button>
        </form>

        <div className={styles.filterRow}>
          {(['all', 'mine', 'theirs'] as const).map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'mine' ? 'Mine' : partnerName + "'s"}
            </button>
          ))}
        </div>

        <ul className={styles.list}>
          {filtered.length === 0 && (
            <li className={styles.empty}>No wishes yet. Add something above.</li>
          )}
          {filtered.map(item => (
            <li key={item.id} className={`${styles.item} ${item.status === 'gifted' ? styles.gifted : ''}`}>
              <div className={styles.info}>
                <div className={styles.itemTop}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={`${styles.priorityTag} ${styles[`tag_${item.priority}`]}`}>
                    {PRIORITY_LABELS[item.priority]}
                  </span>
                </div>
                {item.link && (
                  <a className={styles.itemLink} href={item.link} target="_blank" rel="noreferrer">
                    View link
                  </a>
                )}
                <span className={styles.addedBy}>
                  {item.addedBy === user?.uid ? 'your wish' : `${partnerName}'s wish`}
                  {item.status === 'gifted' && ' — gifted!'}
                </span>
              </div>
              <div className={styles.actions}>
                {item.status === 'wanted' && item.addedBy !== user?.uid && (
                  <button className={styles.giftBtn} onClick={() => void markGifted(item.id)}>
                    Mark gifted
                  </button>
                )}
                <button className={styles.deleteBtn} onClick={() => void deleteItem(item.id)}>x</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
