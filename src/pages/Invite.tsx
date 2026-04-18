import { useState } from 'react'
import { usePartner } from '../hooks/usePartner'
import { useAuth } from '../hooks/useAuth'
import styles from './Invite.module.css'

export default function Invite() {
  const { user } = useAuth()
  const { userData, generateInviteCode, redeemCode, error } = usePartner(user?.uid)
  const [redeemInput, setRedeemInput] = useState('')
  const [copied, setCopied] = useState(false)
  const [mode, setMode] = useState<'choice' | 'share' | 'enter'>('choice')

  const existingCode: string | undefined = userData?.inviteCode

  const handleGenerate = async () => {
    await generateInviteCode()
    setMode('share')
  }

  const handleCopy = () => {
    if (!existingCode) return
    navigator.clipboard.writeText(existingCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRedeem = async () => {
    await redeemCode(redeemInput)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Connect with your partner</h2>
        <p className={styles.sub}>One of you shares a code, the other enters it.</p>

        {mode === 'choice' && (
          <div className={styles.choices}>
            <button className={styles.btn} onClick={() => { void handleGenerate(); setMode('share') }}>
              Share my code
            </button>
            <button className={styles.btnOutline} onClick={() => setMode('enter')}>
              Enter partner's code
            </button>
          </div>
        )}

        {mode === 'share' && existingCode && (
          <div className={styles.codeBlock}>
            <span className={styles.code}>{existingCode}</span>
            <button className={styles.copyBtn} onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <p className={styles.hint}>Share this with your partner via WhatsApp, SMS, anything.</p>
            <button className={styles.link} onClick={() => setMode('enter')}>
              I have their code instead
            </button>
          </div>
        )}

        {mode === 'enter' && (
          <div className={styles.enterBlock}>
            <input
              className={styles.input}
              placeholder="Enter 6-character code"
              value={redeemInput}
              onChange={(e) => setRedeemInput(e.target.value.toUpperCase())}
              maxLength={6}
            />
            <button className={styles.btn} onClick={() => void handleRedeem()}>
              Connect
            </button>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.link} onClick={() => setMode('share')}>
              Share my code instead
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
