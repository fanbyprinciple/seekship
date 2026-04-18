import type { PanicCause, PanicState } from '../hooks/usePanic'
import styles from './PanicOverlay.module.css'

interface Props {
  panic: PanicState
  isMe: boolean
  partnerName: string
  onDismiss: () => void
}

const CAUSE_LABELS: Record<PanicCause, string> = {
  food: 'Hungry',
  pain: 'In Pain',
  boredom: 'Bored',
}

const CAUSE_MSG: Record<PanicCause, string> = {
  food: 'needs food right now',
  pain: 'is in pain',
  boredom: 'is really bored',
}

export default function PanicOverlay({ panic, isMe, partnerName, onDismiss }: Props) {
  if (!panic.active || !panic.cause) return null

  const who = isMe ? 'You' : partnerName
  const msg = `${who} ${CAUSE_MSG[panic.cause]}`

  return (
    <div className={styles.overlay}>
      <div className={styles.light} />
      <div className={styles.content}>
        <div className={styles.alertLabel}>ALERT</div>
        <p className={styles.causeLabel}>{CAUSE_LABELS[panic.cause].toUpperCase()}</p>
        <p className={styles.message}>{msg}</p>
        <button className={styles.dismissBtn} onClick={onDismiss}>
          I am okay now
        </button>
      </div>
    </div>
  )
}
