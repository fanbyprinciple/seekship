import { TwoHeartsIllustration } from './Illustrations'
import styles from './Logo.module.css'

interface Props {
  size?: number
}

export default function Logo({ size = 36 }: Props) {
  return (
    <div className={styles.logoWrap}>
      <TwoHeartsIllustration size={size} />
      <span className={styles.wordmark}>seekship</span>
    </div>
  )
}
