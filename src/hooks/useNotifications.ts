import { useEffect, useState, useCallback } from 'react'
import { getToken, onMessage } from 'firebase/messaging'
import { doc, updateDoc } from 'firebase/firestore'
import { db, getMessagingInstance } from '../firebase'

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY as string

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

async function saveFcmToken(uid: string, registration: ServiceWorkerRegistration): Promise<boolean> {
  const messaging = await getMessagingInstance()
  if (!messaging) return false
  try {
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    })
    if (!token) return false
    await updateDoc(doc(db, 'users', uid), { fcmToken: token })
    return true
  } catch (e) {
    console.warn('FCM token error:', e)
    return false
  }
}

async function attachForegroundListener(registration: ServiceWorkerRegistration) {
  // When the app is in the foreground the browser suppresses system
  // notifications delivered via FCM. Re-show them manually so users still
  // see them while the app is open — matches native messenger behavior.
  const messaging = await getMessagingInstance()
  if (!messaging) return
  onMessage(messaging, (payload) => {
    const title = payload.notification?.title ?? 'Seekship'
    const body = payload.notification?.body ?? ''
    const type = (payload.data?.type as string) ?? ''
    const isPanic = type === 'panic' || /hungry|pain|bored|needs you/i.test(title)
    try {
      registration.showNotification(title, {
        body,
        icon: '/seekship/apple-touch-icon.svg',
        badge: '/seekship/heart.svg',
        tag: isPanic ? 'seekship-panic' : `seekship-msg-${Date.now()}`,
        renotify: isPanic,
        requireInteraction: isPanic,
        vibrate: isPanic ? [250, 120, 250, 120, 400] : [180, 90, 180],
        data: { url: payload.fcmOptions?.link ?? '/seekship/home', type },
      } as NotificationOptions)
    } catch (e) {
      console.warn('foreground notif show failed:', e)
    }
  })
}

export function useNotifications(uid: string | undefined) {
  const [permission, setPermission] = useState<PermissionState>(currentPermission())

  // Auto-attempt setup if permission already granted. iOS PWA first-time
  // grant requires a user gesture — see enableNotifications below.
  useEffect(() => {
    if (!uid) return
    if (currentPermission() !== 'granted') return

    let cancelled = false
    void (async () => {
      const registration = await registerSw()
      if (!registration || cancelled) return
      await saveFcmToken(uid, registration)
      await attachForegroundListener(registration)
    })()
    return () => { cancelled = true }
  }, [uid])

  // Call this from a click handler. Needed for iOS PWA (and best-practice
  // everywhere) because requestPermission must run inside a user gesture.
  const enableNotifications = useCallback(async (): Promise<PermissionState> => {
    const state = currentPermission()
    if (state === 'unsupported') return 'unsupported'
    if (state === 'denied') return 'denied'

    const result = await Notification.requestPermission()
    setPermission(result as PermissionState)
    if (result !== 'granted') return result as PermissionState
    if (!uid) return 'granted'

    const registration = await registerSw()
    if (!registration) return 'granted'
    await saveFcmToken(uid, registration)
    await attachForegroundListener(registration)
    return 'granted'
  }, [uid])

  return { permission, enableNotifications }
}
