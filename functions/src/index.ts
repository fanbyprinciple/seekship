import * as admin from 'firebase-admin'
import * as logger from 'firebase-functions/logger'
import { onDocumentCreated, onDocumentWritten } from 'firebase-functions/v2/firestore'
import { defineString } from 'firebase-functions/params'

admin.initializeApp()
const db = admin.firestore()
const messaging = admin.messaging()

// Configurable base URL for notification deep-links so we don't hard-code a
// fork owner in production code. Set with:
//   firebase functions:config:set (legacy) or via deployment params.
const APP_BASE_URL = defineString('APP_BASE_URL', {
  default: 'https://fanbyprinciple.github.io/seekship',
  description: 'Public base URL used in FCM webpush deep-links.',
})

async function getToken(uid: string): Promise<string | null> {
  const snap = await db.doc(`users/${uid}`).get()
  return snap.data()?.fcmToken ?? null
}

async function clearStaleToken(uid: string): Promise<void> {
  try {
    await db.doc(`users/${uid}`).update({ fcmToken: admin.firestore.FieldValue.delete() })
  } catch (e) {
    logger.warn('clearStaleToken failed', { uid, error: String(e) })
  }
}

async function senderFirstName(uid: string): Promise<string> {
  try {
    const snap = await db.doc(`users/${uid}`).get()
    const name = snap.data()?.displayName as string | undefined
    return name?.split(' ')[0] ?? 'Your partner'
  } catch {
    return 'Your partner'
  }
}

interface PushOpts {
  token: string
  toUid: string
  title: string
  body: string
  link: string
}

async function safeSend({ token, toUid, title, body, link }: PushOpts): Promise<void> {
  try {
    await messaging.send({
      token,
      notification: { title, body },
      webpush: {
        notification: { requireInteraction: true },
        fcmOptions: { link },
      },
    })
    logger.info('push sent', { toUid, title })
  } catch (e) {
    const code = (e as { code?: string })?.code ?? ''
    logger.error('push failed', { toUid, code, error: String(e) })
    // FCM tells us when a token is no longer registered — drop it so we
    // don't keep retrying forever.
    if (code === 'messaging/registration-token-not-registered' ||
        code === 'messaging/invalid-registration-token') {
      await clearStaleToken(toUid)
    }
  }
}

// New message → push to recipient
export const onNewMessage = onDocumentCreated('messages/{messageId}', async (event) => {
  const data = event.data?.data()
  if (!data) return

  const toUid = data.toUid as string
  const fromUid = data.fromUid as string
  const text = (data.text as string) ?? ''

  const token = await getToken(toUid)
  if (!token) {
    logger.debug('no fcm token — skip push', { toUid })
    return
  }

  const name = await senderFirstName(fromUid)
  await safeSend({
    token,
    toUid,
    title: `${name} sent you a message`,
    body: text.slice(0, 140),
    link: `${APP_BASE_URL.value()}/message`,
  })
})

// Panic triggered → push to partner
export const onPanicTriggered = onDocumentWritten('panics/{partnershipId}', async (event) => {
  const after = event.data?.after.data()
  const before = event.data?.before.data()

  // Only fire when panic transitions to active.
  if (!after?.active || before?.active) return

  const partnershipId: string = event.params.partnershipId
  const activatedBy: string = after.activatedBy
  const cause: string = after.cause

  // partnershipId is sorted `uidA_uidB`. Guard against malformed docs.
  const uids = partnershipId.split('_')
  if (uids.length !== 2) {
    logger.warn('bad partnershipId shape', { partnershipId })
    return
  }
  const partnerUid = uids.find(u => u !== activatedBy)
  if (!partnerUid) return

  const token = await getToken(partnerUid)
  if (!token) return

  const name = await senderFirstName(activatedBy)
  const causeLabels: Record<string, string> = {
    food: 'is hungry', pain: 'is in pain', boredom: 'is bored',
  }
  const label = causeLabels[cause] ?? 'needs you'

  await safeSend({
    token,
    toUid: partnerUid,
    title: `${name} ${label}`,
    body: 'Open the app now.',
    link: `${APP_BASE_URL.value()}/home`,
  })
})
