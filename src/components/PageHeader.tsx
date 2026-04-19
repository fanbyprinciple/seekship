import Logo from './Logo'
import ThemePicker from './ThemePicker'
import styles from './PageHeader.module.css'

export default function PageHeader() {
  return (
    <header className={styles.header}>
      <Logo size={30} />
      <ThemePicker />
    </header>
  )
}
