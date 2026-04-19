// Seekship service worker. No server push (free Spark plan) — clients
// show notifications locally via registration.showNotification when they
// observe new Firestore documents. This SW only handles notification
// clicks and keeps itself registered so showNotification() has a scope
// to render into.
//
// File kept under `firebase-messaging-sw.js` name so previously-registered
// service workers on existing devices pick up the replacement on next
// page load without an unregister dance.

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = event.notification.data?.url ?? '/seekship/home'
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
