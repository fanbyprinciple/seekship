// Seekship push service worker.
// Loaded on every origin as `/seekship/firebase-messaging-sw.js`. This
// file must live at the app root (not bundled) because FCM registers it
// by URL. Any change requires a deploy + unregister/reregister from the
// client to take effect.

importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyBukjka4ltMt_ODPVDnHsgNZ15H-f--xNM',
  authDomain: 'seekship.firebaseapp.com',
  projectId: 'seekship',
  storageBucket: 'seekship.firebasestorage.app',
  messagingSenderId: '273649514086',
  appId: '1:273649514086:web:60156edf65ef8ff2659fa7',
})

const messaging = firebase.messaging()

const DEFAULT_URL = '/seekship/home'

// Longer, attention-grabbing vibration for panic alerts; gentler for messages.
const VIBRATE_PANIC = [250, 120, 250, 120, 400]
const VIBRATE_MESSAGE = [180, 90, 180]

function buildOptions(payload) {
  const data = payload?.data ?? {}
  const notif = payload?.notification ?? {}
  const type = data.type ?? ''
  const isPanic = type === 'panic' || /hungry|pain|bored|needs you/i.test(notif.title ?? '')

  return {
    body: notif.body ?? data.body ?? 'Your partner needs you.',
    icon: '/seekship/apple-touch-icon.svg',
    badge: '/seekship/heart.svg',
    vibrate: isPanic ? VIBRATE_PANIC : VIBRATE_MESSAGE,
    // Panic collapses onto a single notification (renotify fires a new
    // ring); messages keep per-message IDs so multiple stack.
    tag: isPanic ? 'seekship-panic' : `seekship-msg-${data.id ?? Date.now()}`,
    renotify: isPanic,
    requireInteraction: isPanic,
    silent: false,
    data: {
      url: data.url ?? payload?.fcmOptions?.link ?? DEFAULT_URL,
      type,
    },
  }
}

messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title ?? payload?.data?.title ?? 'Seekship'
  self.registration.showNotification(title, buildOptions(payload))
})

// Native Web Push fallback (iOS Safari 16.4+ delivers via `push`, not FCM's
// onBackgroundMessage, when the app is installed as a PWA).
self.addEventListener('push', (event) => {
  if (!event.data) return
  let payload = {}
  try { payload = event.data.json() } catch { payload = { notification: { body: event.data.text() } } }
  // FCM's own handler already fired for matching payloads — avoid double
  // notifications by only firing here when FCM's `fcm.gcm.*` marker is absent.
  if (payload?.from || payload?.messageId) return
  const title = payload?.notification?.title ?? 'Seekship'
  event.waitUntil(self.registration.showNotification(title, buildOptions(payload)))
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = event.notification.data?.url ?? DEFAULT_URL
  event.waitUntil((async () => {
    const clientList = await clients.matchAll({ type: 'window', includeUncontrolled: true })
    for (const client of clientList) {
      if (client.url.includes('/seekship')) {
        if ('navigate' in client) {
          try { await client.navigate(url) } catch { /* cross-origin — ignore */ }
        }
        return client.focus()
      }
    }
    if (clients.openWindow) return clients.openWindow(url)
  })())
})
