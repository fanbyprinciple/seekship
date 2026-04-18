// Simple hand-drawn style SVG illustrations — ink on paper aesthetic

export function HeartIllustration({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 120 108" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 90 C20 65, 5 45, 5 30 C5 15, 18 6, 32 6 C44 6, 54 14, 60 24 C66 14, 76 6, 88 6 C102 6, 115 15, 115 30 C115 45, 100 65, 60 90Z" />
      {/* small decorative lines */}
      <line x1="10" y1="18" x2="6" y2="14" />
      <line x1="110" y1="18" x2="114" y2="14" />
      <line x1="60" y1="98" x2="60" y2="105" />
      <line x1="56" y1="103" x2="64" y2="103" />
    </svg>
  )
}

export function EnvelopeIllustration({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 120 90" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="18" width="104" height="64" rx="3" />
      <path d="M8 18 L60 55 L112 18" />
      <line x1="8" y1="82" x2="38" y2="55" />
      <line x1="112" y1="82" x2="82" y2="55" />
      {/* stamp decoration */}
      <rect x="88" y="24" width="18" height="18" rx="1" />
      <path d="M91 33 C93 28, 99 28, 101 33 C103 38, 100 41, 97 41 C94 41, 91 38, 91 33Z" />
    </svg>
  )
}

export function StarIllustration({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 8 L46 30 L70 30 L51 44 L58 67 L40 53 L22 67 L29 44 L10 30 L34 30 Z" />
      <line x1="40" y1="2" x2="40" y2="6" />
      <line x1="72" y1="18" x2="69" y2="21" />
      <line x1="8" y1="18" x2="11" y2="21" />
    </svg>
  )
}

export function CalendarIllustration({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="18" width="80" height="72" rx="3" />
      <line x1="10" y1="35" x2="90" y2="35" />
      <line x1="30" y1="10" x2="30" y2="26" />
      <line x1="70" y1="10" x2="70" y2="26" />
      {/* day dots */}
      {[28, 44, 60, 76].map(x =>
        [48, 62, 76].map(y => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="var(--ink)" />
        ))
      )}
      {/* heart on a day */}
      <path d="M55 50 C53 47, 49 47, 49 51 C49 54, 52 56, 55 58 C58 56, 61 54, 61 51 C61 47, 57 47, 55 50Z" strokeWidth="1.5" />
    </svg>
  )
}

export function TwoHeartsIllustration({ size = 140 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 140 100" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Left heart */}
      <path d="M42 72 C18 55, 8 40, 8 28 C8 17, 17 10, 27 10 C34 10, 40 14, 42 20 C44 14, 50 10, 57 10 C67 10, 76 17, 76 28 C76 40, 66 55, 42 72Z" />
      {/* Right heart */}
      <path d="M98 72 C74 55, 64 40, 64 28 C64 17, 73 10, 83 10 C90 10, 96 14, 98 20 C100 14, 106 10, 113 10 C123 10, 132 17, 132 28 C132 40, 122 55, 98 72Z" />
      {/* connecting dotted line */}
      <line x1="76" y1="42" x2="64" y2="42" strokeDasharray="3 3" />
      {/* small stars */}
      <path d="M70 80 L71.5 85 L77 85 L72.5 88 L74 93 L70 90 L66 93 L67.5 88 L63 85 L68.5 85 Z" strokeWidth="1.5" />
    </svg>
  )
}
