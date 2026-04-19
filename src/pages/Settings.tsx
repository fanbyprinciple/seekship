import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import { useNotifications } from '../hooks/useNotifications'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import ThemePicker from '../components/ThemePicker'
import styles from './Settings.module.css'

export default function Settings() {
  const { user } = useAuth()
  const { userData, partnerData, disconnectPartner, regenerateCode } = usePartner(user?.uid)
  const { permission, enableNotifications } = useNotifications(user?.uid)
  const navigate = useNavigate()
  const [confirmDisconnect, setConfirmDisconnect] = useState(false)
  const [newCode, setNewCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [nickname, setNickname] = useState<string>('')
  const [nicknameSaved, setNicknameSaved] = useState(false)
  const [notifBusy, setNotifBusy] = useState(false)
  const isStandalone =
    typeof window !== 'undefined' &&
    (window.matchMedia('(display-mode: standalone)').matches ||
     ('standalone' in window.navigator && (window.navigator as { standalone?: boolean }).standalone === true))
  const isIOS = typeof window !== 'undefined' &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent)

  const handleEnableNotifs = async () => {
    setNotifBusy(true)
    await enableNotifications()
    setNotifBusy(false)
  }

  useEffect(() => {
    if (userData?.partnerNickname) setNickname(userData.partnerNickname as string)
  }, [userData?.partnerNickname])

  const partnerDisplayName = partnerData?.displayName ?? 'your partner'
  const currentCode: string | undefined = userData?.inviteCode

  const handleDisconnect = async () => {
    await disconnectPartner()
    navigate('/home')
  }

  const handleRegenerate = async () => {
    const code = await regenerateCode()
    if (code) setNewCode(code)
  }

  const handleCopy = (code: string) => {
    void navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSaveNickname = async () => {
    if (!user?.uid) return
    await updateDoc(doc(db, 'users', user.uid), { partnerNickname: nickname.trim() || null })
    setNicknameSaved(true)
    setTimeout(() => setNicknameSaved(false), 2000)
  }

  const displayCode = newCode ?? currentCode

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Logo size={30} />
        <ThemePicker />
      </header>
      <Nav />
      <div className={styles.container}>
        <h2 className={styles.title}>Settings</h2>

        {/* Nickname */}
        {partnerData && (
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Partner Nickname</h3>
            <p className={styles.hint}>What do you call {partnerDisplayName.split(' ')[0]}?</p>
            <div className={styles.nicknameRow}>
              <input
                className={styles.nicknameInput}
                type="text"
                placeholder={partnerDisplayName.split(' ')[0]}
                value={nickname}
                maxLength={30}
                onChange={e => setNickname(e.target.value)}
              />
              <button className={styles.outlineBtn} onClick={() => void handleSaveNickname()}>
                Save
              </button>
            </div>
            {nicknameSaved && <p className={styles.success}>Nickname saved!</p>}
          </div>
        )}

        {/* Partner info */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Current Partner</h3>
          {partnerData ? (
            <div className={styles.partnerInfo}>
              {partnerData.photoURL && (
                <img src={partnerData.photoURL as string} className={styles.avatar} alt="" />
              )}
              <div>
                <p className={styles.partnerName}>{partnerDisplayName}</p>
                <p className={styles.partnerEmail}>{partnerData.email as string}</p>
              </div>
            </div>
          ) : (
            <p className={styles.noPartner}>No partner linked.</p>
          )}

          {!confirmDisconnect ? (
            <button className={styles.dangerBtn} onClick={() => setConfirmDisconnect(true)}>
              Disconnect partner
            </button>
          ) : (
            <div className={styles.confirmBox}>
              <p className={styles.confirmText}>
                This unlinks you and <strong>{partnerDisplayName}</strong>. Both of you will need to reconnect with a new code.
              </p>
              <div className={styles.confirmBtns}>
                <button className={styles.dangerBtn} onClick={() => void handleDisconnect()}>
                  Yes, disconnect
                </button>
                <button className={styles.cancelBtn} onClick={() => setConfirmDisconnect(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Notifications</h3>
          <p className={styles.hint}>
            Panic alerts ring on both phones. Messages ping the recipient.
            {isIOS && !isStandalone && (
              <> On iPhone, tap <strong>Share → Add to Home Screen</strong> first — push only works from the installed app.</>
            )}
          </p>
          {permission === 'granted' && (
            <p className={styles.success}>Enabled on this device.</p>
          )}
          {permission === 'default' && (
            <button
              className={styles.outlineBtn}
              onClick={() => void handleEnableNotifs()}
              disabled={notifBusy}
            >
              {notifBusy ? 'Requesting…' : 'Enable notifications'}
            </button>
          )}
          {permission === 'denied' && (
            <p className={styles.hint}>
              Blocked. Re-enable in your browser or phone settings for Seekship,
              then reload this page.
            </p>
          )}
          {permission === 'unsupported' && (
            <p className={styles.hint}>
              This browser can't receive push. Try Chrome on Android or Safari
              on iOS 16.4+ (installed to home screen).
            </p>
          )}
        </div>

        {/* Invite code management */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Invite Code</h3>
          <p className={styles.hint}>Share this code with someone to link as partners. Each code works once.</p>

          {displayCode && (
            <div className={styles.codeRow}>
              <span className={styles.code}>{displayCode}</span>
              <button className={styles.copyBtn} onClick={() => handleCopy(displayCode)}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}

          <button className={styles.outlineBtn} onClick={() => void handleRegenerate()}>
            Generate new code
          </button>
          {newCode && <p className={styles.success}>New code generated! Share it with your partner.</p>}
        </div>
      </div>
    </div>
  )
}
