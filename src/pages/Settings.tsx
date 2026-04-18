import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { usePartner } from '../hooks/usePartner'
import Nav from '../components/Nav'
import styles from './Settings.module.css'

export default function Settings() {
  const { user } = useAuth()
  const { userData, partnerData, disconnectPartner, regenerateCode } = usePartner(user?.uid)
  const navigate = useNavigate()
  const [confirmDisconnect, setConfirmDisconnect] = useState(false)
  const [newCode, setNewCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const partnerName = partnerData?.displayName ?? 'your partner'
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

  const displayCode = newCode ?? currentCode

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <h2 className={styles.title}>⚙ Settings</h2>

        {/* Partner info */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Current Partner</h3>
          {partnerData ? (
            <div className={styles.partnerInfo}>
              {partnerData.photoURL && (
                <img src={partnerData.photoURL as string} className={styles.avatar} alt="" />
              )}
              <div>
                <p className={styles.partnerName}>{partnerName}</p>
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
                This unlinks you and <strong>{partnerName}</strong>. Both of you will need to reconnect with a new code.
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
