import { useEffect, useState, useCallback } from 'react'

export type PermissionState =
  | 'unsupported'
  | 'default'
  | 'granted'
  | 'denied'

function currentPermission(): PermissionState {
  if (typeof window === 'undefined') return 'unsupported'
  if (!('Notification' in window) || !('serviceWorker' in navigator)) return 'unsupported'
  return Notification.permission as PermissionState
}

async function registerSw(): Promise<ServiceWorkerRegistration | null> {
  const swUrl = import.meta.env.BASE_URL + 'firebase-messaging-sw.js'
  try {
    const registration = await navigator.serviceWorker.register(swUrl, {
      scope: import.meta.env.BASE_URL,
    })
    await navigator.serviceWorker.ready
    return registration
  } catch (e) {
    console.warn('SW registration failed:', e)
    return null
  }
}

// Used by useLocalAlerts via the SW registration cached on window.
const REG_WINDOW_KEY = '__seekshipSwReg'
interface WinWithReg extends Window { [REG_WINDOW_KEY]?: ServiceWorkerRegistration | null }

export function useNotifications(_uid: string | undefined) {
  const [permission, setPermission] = useState<PermissionState>(currentPermission())

  useEffect(() => {
    if (currentPermission() !== 'granted') return
    let cancelled = false
    void (async () => {
      const registration = await registerSw()
      if (!registration || cancelled) return
      ;(window as WinWithReg)[REG_WINDOW_KEY] = registration
    })()
    return () => { cancelled = true }
  }, [])

  // iOS PWA (and best-practice everywhere) requires requestPermission to
  // run inside a user gesture. Call this from a click handler.
  const enableNotifications = useCallback(async (): Promise<PermissionState> => {
    const state = currentPermission()
    if (state === 'unsupported') return 'unsupported'
    if (state === 'denied') return 'denied'

    const result = await Notification.requestPermission()
    setPermission(result as PermissionState)
    if (result !== 'granted') return result as PermissionState

    const registration = await registerSw()
    if (registration) (window as WinWithReg)[REG_WINDOW_KEY] = registration
    return 'granted'
  }, [])

  return { permission, enableNotifications }
}

export function getSwRegistration(): ServiceWorkerRegistration | null {
  return (window as WinWithReg)[REG_WINDOW_KEY] ?? null
}
