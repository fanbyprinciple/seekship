import styles from './Logo.module.css'

interface Props {
  size?: number
}

export default function Logo({ size = 36 }: Props) {
  const r = size * 0.33
  const cx1 = size * 0.38
  const cx2 = size * 0.62
  const cy = size * 0.48

  return (
    <div className={styles.logoWrap}>
      <svg
        width={size}
        height={size * 0.7}
        viewBox={`0 0 ${size} ${size * 0.7}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx={cx1} cy={cy * 0.85} r={r}
          stroke="var(--ink)" strokeWidth="2.2"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="96 4"
        />
        <circle
          cx={cx2} cy={cy * 0.85} r={r}
          stroke="var(--accent)" strokeWidth="2.2"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="94 6"
        />
      </svg>
      <span className={styles.wordmark}>seekship</span>
    </div>
  )
}
