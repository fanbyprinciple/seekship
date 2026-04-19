import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { usePanic, type PanicCause } from '../hooks/usePanic'
import Logo from './Logo'
import ThemePicker from './ThemePicker'
import PanicOverlay from './PanicOverlay'
import styles from './TopBar.module.css'

function pid(a: string, b: string) { return [a, b].sort().join('_') }

function GearIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
    </svg>
  )
}

export default function TopBar() {
  const { user, logout } = useAuth()
  const { userData, partnerData } = usePartner(user?.uid)
  const partnershipId = user?.uid && userData?.partnerId
    ? pid(user.uid, userData.partnerId as string)
    : null
  const { panic, triggerPanic, dismissPanic } = usePanic(partnershipId)
  const [showPicker, setShowPicker] = useState(false)

  const nickname: string = (userData?.partnerNickname as string | undefined)
    ?? partnerData?.displayName?.split(' ')[0]
    ?? 'love'

  const handlePanic = async (cause: PanicCause) => {
    if (!user?.uid) return
    await triggerPanic(cause, user.uid)
    setShowPicker(false)
  }

  return (
    <>
      <PanicOverlay
        panic={panic}
        isMe={panic.activatedBy === user?.uid}
        partnerName={nickname}
        onDismiss={() => void dismissPanic()}
      />
      <header className={styles.bar}>
        <Logo size={26} />
        <div className={styles.right}>
          <ThemePicker />
          <span className={styles.withLabel}>with {nickname}</span>
          <div className={styles.panicWrap}>
            <button className={styles.panicBtn} onClick={() => setShowPicker(p => !p)}>
              Panic
            </button>
            {showPicker && (
              <div className={styles.panicMenu}>
                {(['food', 'pain', 'boredom'] as PanicCause[]).map(c => (
                  <button key={c} className={styles.panicChoice} onClick={() => void handlePanic(c)}>
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
          {user?.photoURL && <img src={user.photoURL} className={styles.avatar} alt="" />}
          <Link to="/settings" className={styles.gearBtn} title="Settings"><GearIcon /></Link>
          <button className={styles.signOut} onClick={() => void logout()}>Out</button>
        </div>
      </header>
    </>
  )
}
