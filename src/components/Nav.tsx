import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/home',        label: 'Home' },
  { to: '/note',        label: 'Note' },
  { to: '/checklist',   label: 'List' },
  { to: '/calendar',    label: 'Calendar' },
  { to: '/meetup',      label: 'Meetup' },
  { to: '/movies',      label: 'Movies' },
  { to: '/goals',       label: 'Goals' },
  { to: '/wishlist',    label: 'Wishlist' },
  { to: '/growth',      label: 'Growth' },
  { to: '/stats',       label: 'Stats' },
  { to: '/councillor',  label: 'Councillor' },
]

const SCROLL_KEY = 'seekship-nav-scroll'

export default function Nav() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const saved = sessionStorage.getItem(SCROLL_KEY)
    const parsed = saved !== null ? Number(saved) : NaN

    if (Number.isFinite(parsed) && parsed > 0) {
      el.scrollLeft = parsed
    } else {
      // No prior scroll state — center the active tab so tapping doesn't
      // feel like a reset on first visit.
      const active = el.querySelector<HTMLAnchorElement>(`.${styles.active}`)
      if (active) {
        const activeCenter = active.offsetLeft + active.offsetWidth / 2
        el.scrollLeft = Math.max(0, activeCenter - el.clientWidth / 2)
      }
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        sessionStorage.setItem(SCROLL_KEY, String(el.scrollLeft))
        raf = 0
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <div className={styles.scroll} ref={scrollRef}>
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
