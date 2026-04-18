import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/home',      label: '✉ Note' },
  { to: '/message',   label: '♥ Inbox' },
  { to: '/checklist', label: '☑ List' },
  { to: '/calendar',  label: '📅 Cal' },
  { to: '/together',  label: '🎬 Together' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => isActive ? styles.active : styles.link}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
