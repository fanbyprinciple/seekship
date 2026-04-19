import type { DocumentData } from 'firebase/firestore'

export function partnershipId(a: string, b: string): string {
  return [a, b].sort().join('_')
}

export function maybePartnershipId(
  uid: string | undefined,
  partnerUid: string | undefined | null
): string | null {
  return uid && partnerUid ? partnershipId(uid, partnerUid as string) : null
}

export function partnerNickname(
  userData: DocumentData | null | undefined,
  partnerData: DocumentData | null | undefined,
  fallback = 'partner'
): string {
  const nick = userData?.partnerNickname as string | undefined
  if (nick && nick.trim()) return nick
  const first = (partnerData?.displayName as string | undefined)?.split(' ')[0]
  return first || fallback
}
