import { useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, googleProvider } from '../firebase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // onAuthStateChanged fires once on mount with current auth state,
    // then again whenever login/logout happens
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)

      if (firebaseUser) {
        // Upsert user doc — merge:true so we don't overwrite existing fields
        await setDoc(
          doc(db, 'users', firebaseUser.uid),
          {
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
          },
          { merge: true }
        )
      }
    })

    return unsubscribe
  }, [])

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider)

  const logout = () => signOut(auth)

  return { user, loading, loginWithGoogle, logout }
}
