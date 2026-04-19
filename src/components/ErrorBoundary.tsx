import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface in devtools; wire to a telemetry sink later.
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  handleReset = () => {
    this.setState({ error: null })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div style={{
        minHeight: '100dvh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 16, padding: 24,
        background: 'var(--paper)', color: 'var(--ink)',
        fontFamily: 'var(--font-ui)', textAlign: 'center',
      }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem' }}>Something broke.</h1>
        <p style={{ margin: 0, color: 'var(--ink-light)', maxWidth: 420 }}>
          {this.state.error.message || 'An unexpected error happened.'}
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={this.handleReset} style={btn}>Try again</button>
          <button onClick={this.handleReload} style={btn}>Reload</button>
        </div>
      </div>
    )
  }
}

const btn: React.CSSProperties = {
  padding: '10px 18px',
  border: 'var(--sketch-border)',
  background: 'var(--paper-dark)',
  color: 'var(--ink)',
  boxShadow: 'var(--sketch-shadow)',
  borderRadius: 4,
  fontFamily: 'var(--font-ui)',
  fontWeight: 600,
  cursor: 'pointer',
  minHeight: 44,
}
