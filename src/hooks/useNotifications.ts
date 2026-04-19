import { useEffect } from 'react'
import { getToken } from 'firebase/messaging'
import { doc, updateDoc } from 'firebase/firestore'
import { db, getMessagingInstance } from '../firebase'

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY as string

export function useNotifications(uid: string | undefined) {
  useEffect(() => {
    if (!uid || !('Notification' in window) || !('serviceWorker' in navigator)) return

    const setup = async () => {
      const messaging = await getMessagingInstance()
      if (!messaging) return

      const permission = await Notification.requestPermission()
      if (permission !== 'granted') return

      try {
        // Explicit SW registration so it works with any base path
        const swUrl = import.meta.env.BASE_URL + 'firebase-messaging-sw.js'
        const registration = await navigator.serviceWorker.register(swUrl, {
          scope: import.meta.env.BASE_URL,
        })
        await navigator.serviceWorker.ready

        const token = await getToken(messaging, {
          vapidKey: VAPID_KEY,
          serviceWorkerRegistration: registration,
        })
        if (token) {
          await updateDoc(doc(db, 'users', uid), { fcmToken: token })
        }
      } catch (e) {
        console.warn('FCM token error:', e)
      }
    }

    void setup()
  }, [uid])
}
