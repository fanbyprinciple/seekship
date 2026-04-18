import * as admin from 'firebase-admin'
import { onDocumentCreated, onDocumentWritten } from 'firebase-functions/v2/firestore'

admin.initializeApp()
const db = admin.firestore()
const messaging = admin.messaging()

async function getToken(uid: string): Promise<string | null> {
  const snap = await db.doc(`users/${uid}`).get()
  return snap.data()?.fcmToken ?? null
}

// New message → push to recipient
export const onNewMessage = onDocumentCreated('messages/{messageId}', async (event) => {
  const data = event.data?.data()
  if (!data) return

  const token = await getToken(data.toUid)
  if (!token) return

  const senderSnap = await db.doc(`users/${data.fromUid}`).get()
  const senderName = senderSnap.data()?.displayName?.split(' ')[0] ?? 'Your partner'

  await messaging.send({
    token,
    notification: {
      title: `${senderName} sent you a message`,
      body: data.text,
    },
    webpush: {
      notification: { requireInteraction: true },
      fcmOptions: { link: 'https://fanbyprinciple.github.io/seekship/message' },
    },
  })
})

// Panic triggered → push to partner
export const onPanicTriggered = onDocumentWritten('panics/{partnershipId}', async (event) => {
  const after = event.data?.after.data()
  const before = event.data?.before.data()

  // Only fire when panic becomes active (not on dismiss)
  if (!after?.active || before?.active) return

  const partnershipId: string = event.params.partnershipId
  const activatedBy: string = after.activatedBy
  const cause: string = after.cause

  // Find the other UID from partnershipId (format: uid1_uid2)
  const uids = partnershipId.split('_')
  const partnerUid = uids.find(u => u !== activatedBy)
  if (!partnerUid) return

  const token = await getToken(partnerUid)
  if (!token) return

  const senderSnap = await db.doc(`users/${activatedBy}`).get()
  const senderName = senderSnap.data()?.displayName?.split(' ')[0] ?? 'Your partner'

  const causeLabels: Record<string, string> = { food: 'is hungry', pain: 'is in pain', boredom: 'is bored' }
  const label = causeLabels[cause] ?? 'needs you'

  await messaging.send({
    token,
    notification: {
      title: `${senderName} ${label}`,
      body: 'Open the app now.',
    },
    webpush: {
      notification: { requireInteraction: true },
      fcmOptions: { link: 'https://fanbyprinciple.github.io/seekship/home' },
    },
  })
})
