import { useState, useEffect } from 'react'

export type Theme = 'white' | 'pink' | 'purple' | 'dark'

const STORAGE_KEY = 'seekship-theme'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'white'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // Apply on mount in case HTML doesn't have it yet
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [])

  const setTheme = (t: Theme) => setThemeState(t)

  return { theme, setTheme }
}
