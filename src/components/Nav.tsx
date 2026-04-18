import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/home" className={({ isActive }) => isActive ? styles.active : styles.link}>
        ✉ Message
      </NavLink>
      <NavLink to="/checklist" className={({ isActive }) => isActive ? styles.active : styles.link}>
        ☑ List
      </NavLink>
      <NavLink to="/message" className={({ isActive }) => isActive ? styles.active : styles.link}>
        ♥ Inbox
      </NavLink>
    </nav>
  )
}
