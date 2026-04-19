import { useEffect, useRef } from 'react'
import {
  collection, query, where, orderBy, limit,
  onSnapshot, doc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { getSwRegistration } from './useNotifications'

const VIBRATE_PANIC = [250, 120, 250, 120, 400]
const VIBRATE_MESSAGE = [180, 90, 180]

interface ShowOpts {
  title: string
  body: string
  kind: 'panic' | 'message'
  url?: string
  id?: string
}

function show({ title, body, kind, url, id }: ShowOpts) {
  if (typeof window === 'undefined') return
  if (!('Notification' in window) || Notification.permission !== 'granted') return

  const options: NotificationOptions = {
    body,
    icon: '/seekship/apple-touch-icon.svg',
    badge: '/seekship/heart.svg',
    tag: kind === 'panic' ? 'seekship-panic' : `seekship-msg-${id ?? Date.now()}`,
    // `renotify` and `vibrate` are in the spec but missing from the TS
    // lib — cast once to keep strict typing happy while still emitting
    // them at runtime.
    ...( {
      renotify: kind === 'panic',
      vibrate: kind === 'panic' ? VIBRATE_PANIC : VIBRATE_MESSAGE,
    } as Partial<NotificationOptions>),
    requireInteraction: kind === 'panic',
    silent: false,
    data: { url: url ?? '/seekship/home', kind },
  }

  const reg = getSwRegistration()
  if (reg) {
    void reg.showNotification(title, options)
  } else if (document.visibilityState !== 'visible') {
    // Fallback plain Notification only when the tab is in the background;
    // otherwise it's visually redundant with the in-app panic overlay.
    try { new Notification(title, options) } catch { /* iOS PWA needs SW — ignore */ }
  }
}

// Public helper so in-page triggers (panic button) can also show a
// confirmation notification on the activator's device.
export function localNotify(opts: ShowOpts) {
  show(opts)
}

export function useLocalAlerts(
  uid: string | undefined,
  partnerId: string | undefined,
  partnershipId: string | null,
) {
  const seenMsgIds = useRef<Set<string>>(new Set())
  const msgHydrated = useRef(false)
  const panicHydrated = useRef(false)
  const lastPanicKey = useRef<string | null>(null)

  // Incoming messages → notify on new doc after initial hydration.
  useEffect(() => {
    if (!uid || !partnerId) return
    seenMsgIds.current = new Set()
    msgHydrated.current = false

    const q = query(
      collection(db, 'messages'),
      where('fromUid', '==', partnerId),
      where('toUid', '==', uid),
      orderBy('sentAt', 'desc'),
      limit(20),
    )

    const unsub = onSnapshot(q, (snap) => {
      if (!msgHydrated.current) {
        snap.docs.forEach(d => seenMsgIds.current.add(d.id))
        msgHydrated.current = true
        return
      }
      snap.docChanges().forEach((change) => {
        if (change.type !== 'added') return
        if (seenMsgIds.current.has(change.doc.id)) return
        seenMsgIds.current.add(change.doc.id)
        const data = change.doc.data()
        show({
          title: 'New note from your partner',
          body: String(data.text ?? '').slice(0, 140) || 'Open to read it.',
          kind: 'message',
          url: '/seekship/message',
          id: change.doc.id,
        })
      })
    })

    return unsub
  }, [uid, partnerId])

  // Panic: notify both sides when `active` transitions false→true.
  useEffect(() => {
    if (!partnershipId) return
    panicHydrated.current = false
    lastPanicKey.current = null

    const unsub = onSnapshot(doc(db, 'panics', partnershipId), (snap) => {
      const data = snap.data()
      const active = !!data?.active
      const activatedBy = (data?.activatedBy as string | undefined) ?? ''
      const cause = (data?.cause as string | undefined) ?? ''
      const triggeredAt = (data?.triggeredAt as { seconds?: number } | undefined)?.seconds ?? 0
      const key = active ? `${activatedBy}:${cause}:${triggeredAt}` : null

      if (!panicHydrated.current) {
        lastPanicKey.current = key
        panicHydrated.current = true
        return
      }

      if (!active) {
        lastPanicKey.current = null
        return
      }
      if (key === lastPanicKey.current) return
      lastPanicKey.current = key

      const causeLabels: Record<string, string> = {
        food: 'is hungry', pain: 'is in pain', boredom: 'is bored',
      }
      const label = causeLabels[cause] ?? 'needs you'

      if (activatedBy === uid) {
        show({
          title: 'Panic sent',
          body: `Cause: ${cause}. Waiting for them to acknowledge.`,
          kind: 'panic',
          url: '/seekship/home',
        })
      } else {
        show({
          title: `Your partner ${label}`,
          body: 'Open the app now.',
          kind: 'panic',
          url: '/seekship/home',
        })
      }
    })

    return unsub
  }, [partnershipId, uid])
}
