import { useState, useEffect } from 'react'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  runTransaction,
  deleteField,
  serverTimestamp,
  onSnapshot,
  type DocumentData,
} from 'firebase/firestore'
import { db } from '../firebase'

function generateCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

export function usePartner(uid: string | undefined) {
  const [userData, setUserData] = useState<DocumentData | null>(null)
  const [partnerData, setPartnerData] = useState<DocumentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!uid) {
      setLoading(false)
      return
    }

    const unsubscribe = onSnapshot(doc(db, 'users', uid), async (snap) => {
      const data = snap.data() ?? null
      setUserData(data)
      setLoading(false)

      if (data?.partnerId) {
        const partnerSnap = await getDoc(doc(db, 'users', data.partnerId))
        setPartnerData(partnerSnap.data() ?? null)
      } else {
        setPartnerData(null)
      }
    })

    return unsubscribe
  }, [uid])

  const generateInviteCode = async () => {
    if (!uid) return
    setError(null)
    const code = generateCode()
    await setDoc(doc(db, 'inviteCodes', code), {
      fromUid: uid,
      createdAt: serverTimestamp(),
      used: false,
    })
    await updateDoc(doc(db, 'users', uid), { inviteCode: code })
    return code
  }

  const redeemCode = async (code: string) => {
    if (!uid) return
    setError(null)
    const upper = code.toUpperCase().trim()

    try {
      await runTransaction(db, async (tx) => {
        const codeRef = doc(db, 'inviteCodes', upper)
        const codeSnap = await tx.get(codeRef)

        if (!codeSnap.exists()) throw new Error('Code not found.')
        const codeData = codeSnap.data()
        if (codeData.used) throw new Error('Code already used.')
        if (codeData.fromUid === uid) throw new Error('Cannot use your own code.')

        const fromUid: string = codeData.fromUid

        tx.update(codeRef, { used: true })
        tx.update(doc(db, 'users', uid), { partnerId: fromUid })
        tx.update(doc(db, 'users', fromUid), { partnerId: uid })
      })
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to redeem code.')
    }
  }

  const disconnectPartner = async () => {
    if (!uid || !userData?.partnerId) return
    const theirUid: string = userData.partnerId
    await runTransaction(db, async (tx) => {
      tx.update(doc(db, 'users', uid), { partnerId: deleteField(), inviteCode: deleteField() })
      tx.update(doc(db, 'users', theirUid), { partnerId: deleteField() })
    })
  }

  const regenerateCode = async () => {
    if (!uid) return
    const code = generateCode()
    await setDoc(doc(db, 'inviteCodes', code), {
      fromUid: uid, createdAt: serverTimestamp(), used: false,
    })
    await updateDoc(doc(db, 'users', uid), { inviteCode: code })
    return code
  }

  return { userData, partnerData, loading, error, generateInviteCode, redeemCode, disconnectPartner, regenerateCode }
}
