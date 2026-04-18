import { useEffect } from 'react'
import { getToken } from 'firebase/messaging'
import { doc, updateDoc } from 'firebase/firestore'
import { db, getMessagingInstance } from '../firebase'

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY as string

export function useNotifications(uid: string | undefined) {
  useEffect(() => {
    if (!uid || !('Notification' in window)) return

    const setup = async () => {
      const messaging = await getMessagingInstance()
      if (!messaging) return

      const permission = await Notification.requestPermission()
      if (permission !== 'granted') return

      try {
        const token = await getToken(messaging, { vapidKey: VAPID_KEY })
        if (token) {
          await updateDoc(doc(db, 'users', uid), { fcmToken: token })
        }
      } catch (e) {
        // Notification permission blocked or SW not ready — non-fatal
        console.warn('FCM token error:', e)
      }
    }

    void setup()
  }, [uid])
}
