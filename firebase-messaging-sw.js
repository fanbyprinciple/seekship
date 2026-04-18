// Firebase Messaging Service Worker
// Handles background push notifications when app is not in foreground

importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js')

// Firebase config injected at runtime via postMessage from the main app
// or you can hardcode it here (it's not secret — these are public keys)
let messaging = null

self.addEventListener('message', (event) => {
  if (event.data?.type === 'FIREBASE_CONFIG') {
    firebase.initializeApp(event.data.config)
    messaging = firebase.messaging()

    messaging.onBackgroundMessage((payload) => {
      const { title, body } = payload.notification ?? {}
      self.registration.showNotification(title ?? 'Seekship', {
        body: body ?? 'Your partner sent you a message.',
        icon: '/seekship/heart.svg',
        badge: '/seekship/heart.svg',
        data: { url: '/seekship/message' },
        requireInteraction: true, // keeps notification visible until user interacts
      })
    })
  }
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = event.notification.data?.url ?? '/seekship/message'
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('/seekship') && 'focus' in client) {
          client.navigate(url)
          return client.focus()
        }
      }
      if (clients.openWindow) return clients.openWindow(url)
    })
  )
})
