import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { usePartner } from './hooks/usePartner'
import { useNotifications } from './hooks/useNotifications'
import ErrorBoundary from './components/ErrorBoundary'

// Login + Invite are in the critical auth path; ship them eagerly.
import Login from './pages/Login'
import Invite from './pages/Invite'

// Everything else loads lazily to keep the initial bundle lean on mobile.
const Home = lazy(() => import('./pages/Home'))
const Note = lazy(() => import('./pages/Note'))
const Message = lazy(() => import('./pages/Message'))
const Checklist = lazy(() => import('./pages/Checklist'))
const Calendar = lazy(() => import('./pages/Calendar'))
const Meetup = lazy(() => import('./pages/Meetup'))
const Movies = lazy(() => import('./pages/Movies'))
const Goals = lazy(() => import('./pages/Goals'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Settings = lazy(() => import('./pages/Settings'))
const Stats = lazy(() => import('./pages/Stats'))
const Councillor = lazy(() => import('./pages/Councillor'))
const Growth = lazy(() => import('./pages/Growth'))

function AppRoutes() {
  const { user, loading: authLoading } = useAuth()
  const { userData, loading: partnerLoading } = usePartner(user?.uid)
  useNotifications(user?.uid)

  if (authLoading || (user && partnerLoading)) return <LoadingScreen />

  if (!user) {
    return <Routes><Route path="*" element={<Login />} /></Routes>
  }

  if (!userData?.partnerId) {
    return <Routes><Route path="*" element={<Invite />} /></Routes>
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path="/message" element={<Message />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/meetup" element={<Meetup />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/councillor" element={<Councillor />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  )
}

function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--paper)', color: 'var(--ink-light)',
      fontSize: '1.3rem', fontFamily: 'var(--font-ui)',
    }}>
      Loading...
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/seekship">
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  )
}
