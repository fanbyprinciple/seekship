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

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification ?? {}
  self.registration.showNotification(title ?? 'Seekship', {
    body: body ?? 'Your partner needs you.',
    icon: '/seekship/heart.svg',
    badge: '/seekship/heart.svg',
    data: { url: payload.fcmOptions?.link ?? '/seekship/home' },
    requireInteraction: true,
  })
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = event.notification.data?.url ?? '/seekship/home'
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
