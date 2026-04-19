import { useTheme, type Theme } from '../hooks/useTheme'
import styles from './ThemePicker.module.css'

const THEMES: { id: Theme; color: string; label: string }[] = [
  { id: 'white',  color: '#e0e0e0', label: 'White' },
  { id: 'pink',   color: '#e91e8c', label: 'Pink' },
  { id: 'purple', color: '#7c3aed', label: 'Purple' },
  { id: 'dark',   color: '#1a1a2e', label: 'Dark' },
]

export default function ThemePicker() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.picker} role="group" aria-label="Theme">
      {THEMES.map(t => (
        <button
          key={t.id}
          className={`${styles.dot} ${theme === t.id ? styles.active : ''}`}
          style={{ background: t.color }}
          onClick={() => setTheme(t.id)}
          aria-label={t.label}
          title={t.label}
        />
      ))}
    </div>
  )
}
