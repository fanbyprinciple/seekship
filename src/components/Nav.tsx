import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/home',        label: 'Home' },
  { to: '/checklist',   label: 'List' },
  { to: '/calendar',    label: 'Calendar' },
  { to: '/meetup',      label: 'Meetup' },
  { to: '/movies',      label: 'Movies' },
  { to: '/goals',       label: 'Goals' },
  { to: '/wishlist',    label: 'Wishlist' },
  { to: '/stats',       label: 'Stats' },
  { to: '/councillor',  label: 'Councillor' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.scroll}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? styles.active : styles.link}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
