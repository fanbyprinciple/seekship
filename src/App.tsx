import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { usePartner } from './hooks/usePartner'
import Login from './pages/Login'
import Invite from './pages/Invite'
import Home from './pages/Home'
import Message from './pages/Message'
import Checklist from './pages/Checklist'

function AppRoutes() {
  const { user, loading: authLoading } = useAuth()
  const { userData, loading: partnerLoading } = usePartner(user?.uid)

  if (authLoading || (user && partnerLoading)) {
    return <LoadingScreen />
  }

  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    )
  }

  if (!userData?.partnerId) {
    return (
      <Routes>
        <Route path="*" element={<Invite />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/message" element={<Message />} />
      <Route path="/checklist" element={<Checklist />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--paper)',
      color: 'var(--ink-light)',
      fontSize: '1.3rem',
      fontFamily: 'var(--font)',
    }}>
      Loading...
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/seekship">
      <AppRoutes />
    </BrowserRouter>
  )
}
