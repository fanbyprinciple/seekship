# Seekship Setup Report

## Firebase Project
- **Project ID:** seekship
- **Console:** https://console.firebase.google.com/project/seekship/overview

## What was done automatically

| Step | Status |
|------|--------|
| Firebase project created | ✅ Done |
| Web app registered | ✅ Done |
| Firestore database created (nam5/us-central) | ✅ Done |
| Firestore security rules deployed (incl. checklist) | ✅ Done |
| `.env.local` written with config keys | ✅ Done |
| Git checkpoint committed | ✅ Done |
| Pencil sketch theme applied across all pages | ✅ Done |
| Shared checklist feature built | ✅ Done |
| GitHub Actions deploy workflow ready | ✅ Done |

## What you must do manually

### 1. Enable Google Sign-In (required, ~1 min)
Go to https://console.firebase.google.com/project/seekship/authentication/providers
→ Click **Google** → toggle Enable → save

### 2. GitHub deploy (after `gh auth login` in Terminal)
Claude will run these automatically once authenticated:
```
gh repo create seekship --public
git remote add origin https://github.com/fanbyprinciple/seekship.git
git push -u origin main
```
Then add GitHub secrets in repo Settings → Secrets → Actions.

### 3. Add GitHub Pages domain to Firebase (after deploy)
Firebase Console → Authentication → Authorized Domains → Add:
```
fanbyprinciple.github.io
```

## App at a glance

| Page | Route | What it does |
|------|-------|-------------|
| Login | `/` | Google sign-in |
| Invite | auto | Link with partner via 6-char code |
| Home | `/home` | Nickname prompt, quote of day, countdowns |
| Note | `/note` | Send a note with typing indicator |
| Message | `/message` | Inbox + full-screen display + ack |
| Checklist | `/checklist` | Real-time shared to-do list |
| Calendar | `/calendar` | Shared events, important dates, mood |
| Meetup | `/meetup` | Next-meetup countdown |
| Movies | `/movies` | Watch-together list |
| Goals | `/goals` | Shared goals with status |
| Wishlist | `/wishlist` | Gift wishlist |
| Councillor | `/councillor` | Gemini-powered chat with shared context |
| Stats | `/stats` | Leaderboard-style comparison |
| Settings | `/settings` | Nickname, theme, disconnect, Gemini key |

## Theme
Pencil sketch style — cream paper background, Homemade Apple handwriting font,
rough sketch borders, charcoal ink colors. Four theme variants: white, pink,
purple, dark.

## .env.local values (already in file)
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=seekship.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seekship
VITE_FIREBASE_STORAGE_BUCKET=seekship.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=273649514086
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_VAPID_KEY=          ← fill later (push notifications, Feature 3)
```

## GitHub Repository Secrets needed (for Actions deploy)
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_VAPID_KEY
```

## Test locally
```bash
npm run dev
# → http://localhost:5173/seekship/
```

---

## Review improvements shipped in this pass

### Security (Firestore rules)
- `partnershipId.matches('.*' + uid + '.*')` was substring-spoofable (uid
  `"123"` would match `"1234_5678"`). Replaced with a proper
  `isInPartnership()` helper that splits on `_` and checks exact membership
  of both halves.
- `users/{uid}` read was granted to every authenticated user, leaking
  `email`, `photoURL`, `fcmToken`, `isTyping`, `geminiKey` across the
  entire user base. Now scoped to self + linked partner via
  `isPartnerOf(uid)`.
- Explicit create rule on `users/{uid}` forbids pre-setting `partnerId`.
- Two narrow update rules model the partner-link handshake: another user may
  set `partnerId` **only** to their own uid, and an existing partner may
  clear it. Everything else requires `isSelf(uid)`.
- `inviteCodes` now has typed create (`used == false`, `fromUid == auth.uid`)
  and limited update (`used` only). Delete restricted to creator.
- Messages get server-side length guard (≤500 chars) and ack is limited to
  recipient flipping `acknowledged`/`acknowledgedAt`.
- Partnership subcollection rule collapsed into a nested `match` to avoid
  the fragile `{subcollection}/{docId}` wildcard fallthrough.

### Firestore indexes
Added the missing composite index for the common "unread inbox" query
shape (`toUid + acknowledged + sentAt`) — previously that would throw a
`failed-precondition` at runtime the first time a user opened their inbox
in production.

### Mobile / phone optimisation
- `viewport-fit=cover` and `env(safe-area-inset-*)` padding on `#root` and
  `TopBar` so notched phones don't hide content behind the status bar.
- `min-height: 100vh` was present in 16 stylesheets — each now also sets
  `min-height: 100dvh` so the address bar expanding/collapsing doesn't
  create vertical overflow on iOS Safari & Chrome mobile.
- Inputs/textareas forced to `16px` on mobile so iOS doesn't auto-zoom
  on focus; desktop breakpoint (`≥768px`) scales back down.
- `min-height: 44px` / `min-width: 44px` applied to Nav links, all
  `.deleteBtn` variants, panic choices, gear button, and sign-out.
  ThemePicker dots stay visually small but now carry an invisible 44px
  `::before` hit-area for touch accessibility.
- Global `-webkit-tap-highlight-color: transparent`, `touch-action:
  manipulation`, `text-size-adjust: 100%`, `overscroll-behavior-y: none`.
- `prefers-reduced-motion` media query kills animations/transitions for
  users who requested reduced motion.
- `:focus-visible` outline added globally so keyboard users can see
  focus; Nav gets its own `focus-visible` inset outline.
- TopBar collapses "with {nickname}" label and Sign-out button below
  480px so the bar fits on narrow devices.
- Hover-only transforms are suppressed under `@media (hover: none)` so
  taps don't leave hover states stuck on touch.

### PWA / installability
- `public/manifest.webmanifest` added with correct `start_url` / `scope`
  for the `/seekship/` base path, portrait orientation, theme/background
  colors that track the pink theme, and two heart icons (favicon +
  maskable 180px apple-touch-icon SVG).
- `index.html` now emits `theme-color` (light + dark), `apple-mobile-web-app-*`
  meta, and `apple-touch-icon` link so Android + iOS home-screen installs
  behave like a real app.

### Build / bundling
- Routes moved to `React.lazy` with a `Suspense` fallback. Initial bundle
  no longer ships every page up front — 13 per-page chunks (1-12 kB each
  gzipped).
- `vite.config.ts` now declares `manualChunks` that splits Firebase into
  `firebase-core` (app + auth), `firebase-data` (firestore), `firebase-push`
  (messaging), plus a `react-vendor` chunk. Cold load now only needs
  core + react on auth screens; firestore/push are fetched after sign-in.
- Build target pinned to `es2020`; source maps off for prod.

### Reliability
- `ErrorBoundary` component wraps the entire app. An unhandled render
  error now shows a readable "Try again / Reload" screen instead of a
  blank white page.
- Cloud Functions rewritten with:
  - `try/catch` around `messaging.send()`
  - Structured `logger.info/warn/error` calls
  - Auto-cleanup of stale FCM tokens when FCM reports
    `messaging/registration-token-not-registered`
  - `APP_BASE_URL` now a `defineString` deployment param with a default,
    not a hard-coded GitHub Pages URL
  - Message body truncated to 140 chars for the push preview
  - `partnershipId.split('_').length !== 2` guard before derefing the
    partner uid, with a warn log if malformed

### Code quality
- `partnershipId(a, b)` was duplicated in **11 files** (9 pages + a hook +
  TopBar). Extracted to `src/utils/partnership.ts` as `partnershipId`,
  `maybePartnershipId`, and `partnerNickname`.
- The "nickname fallback" snippet `(userData?.partnerNickname ?? partnerData?.displayName?.split(' ')[0] ?? 'partner'`
  was repeated 13 times. Now `partnerNickname(userData, partnerData, fallback?)`.
- Every affected page now reads these helpers instead of redefining them.

---

## Constructive criticism — what's still worth fixing

### 1. Client-stored Gemini API key is a hazard
`userData.geminiKey` lives in the user's own Firestore doc and is used
directly from the browser to call `generativelanguage.googleapis.com`.
Two failure modes:
- **Key exposure**: anyone who can read your user doc (only you after the
  rules change, but still) can lift it. Also sits in browser memory and
  could be leaked via an XSS bug (e.g. if a future feature renders
  user-generated HTML).
- **Rate-limit theft**: a user who pastes their personal key unlocks a
  free LLM for whoever can trigger calls from their session.

**Suggested path:** proxy Councillor through a Cloud Function that holds
one server-side key, rate-limit per-uid (e.g. 20 calls/day), and drop
`geminiKey` from the user doc entirely.

### 2. Stats page will get slow then expensive
`Stats.tsx` fan-outs 7+ `getDocs()` with no `limit()`. Fine for two users
with a few messages; at 10k messages it's a 5s page and a non-trivial
read bill on every visit. Two options:
- **Maintain counters**: a tiny Cloud Function that increments
  `partnerships/{pid}/stats.{msgsSent, goalsDone, ...}` on each
  write. Stats page then reads one doc.
- **Cap + paginate**: cheapest change — add `limit(200)` everywhere in
  Stats and show "200+" when hit.

### 3. Councillor context build does a full-collection scan
`buildContext()` does `getDocs(collection(...goals))`, `checklists`,
`dates` with no limits on every send. Same fix: `.limit(20)` + `orderBy`
a recency field. The message-history split query (sent/received unioned
client-side) is fine in principle but should also be bounded.

### 4. `usePartner` re-fetches partner doc on every user-doc snapshot
Each `onSnapshot` firing on `users/{self}` triggers an independent
`getDoc(partnerId)`. Presence changes (typing indicator, fcmToken
refresh) cause a re-read of the partner even though none of their data
changed. Prefer a second `onSnapshot` on the partner doc so updates are
pushed, not re-polled.

### 5. Typing indicator is chatty and costs writes
`Note.tsx` writes `isTyping: true` on every keystroke. Firestore writes
are billed. Debounce (e.g. set true only on first keystroke + setTimeout
to clear) — the 4s timeout already exists for clear, so you only need
to guard the `true` write.

### 6. No offline / stale-data strategy
There's no Firestore offline persistence (`enableIndexedDbPersistence`),
no service-worker caching of the SPA shell (the SW only handles FCM).
First load over a flaky hotel WiFi is painful. Two quick wins:
- Enable IndexedDB persistence in `firebase.ts` for Firestore.
- Add `vite-plugin-pwa` to cache `index.html` + the `react-vendor` and
  `firebase-core` chunks so the app shell loads offline.

### 7. Push notification UX is aggressive
`requireInteraction: true` on every message means the notification
stays on the lock screen forever until dismissed. For a message-a-day
app this is fine; at any higher volume it becomes a pile of sticky
notifications. Consider `requireInteraction` only on the panic button.

### 8. No rate-limit on the panic button
A user can hammer panic, spamming their partner with push
notifications. Cloud Function could check `panics/{pid}.triggeredAt`
and refuse if < 30s old.

### 9. Weakly-typed Firestore reads
Nearly every page treats `userData` / `partnerData` as `DocumentData`
and then `as string`-casts individual fields. A single
`src/types/models.ts` with `User`, `PartnershipDoc`, `Message`,
`ChecklistItem`, `Goal`, etc. would catch shape drift at compile time.

### 10. Loading vs. "empty" ambiguity
Real-time hooks default `items` to `[]`, so during initial load the
user sees the empty state ("Nothing here yet") before the first
snapshot arrives, then the list flashes in. Hooks should expose a
`loading` flag from the first snapshot and pages should render a
skeleton or a spinner until then.

### 11. No dark-mode system preference respected on first load
Themes only live in `localStorage` via `useTheme`. A new user with
`prefers-color-scheme: dark` still lands on white-paper. Seed
`data-theme` to `"dark"` when `localStorage` is empty and the system
preference is dark.

### 12. `Settings` lets you paste a partner's email but not copy an invite link
The invite flow hands the partner a 6-char code to type. A shareable
deep-link (`/seekship/invite?code=AB12CD`) with a "copy link" button
would be friction-free — and works for SMS, WhatsApp, email.

### 13. There is no automated test
Zero Vitest / Playwright. Given this is a relationship app where a bug
can silently lose a message, at minimum:
- Unit test `partnershipId(a,b) === partnershipId(b,a)`
- Integration test the invite-code transaction against the Firestore
  emulator
- Smoke test the "send message → recipient sees it" path

### 14. No crash telemetry
The new `ErrorBoundary` logs to `console.error`. Wire it to Sentry or
Firebase Crashlytics for web so production errors reach you.

### 15. Bundle could still shrink
`firebase-data` (firestore) is 314 kB uncompressed / 78 kB gzipped —
over half the app. If the feature set allows it, move low-frequency
pages (Stats, Councillor, Movies) onto the Lite SDK or lazy-import
only the Firestore builder functions each page needs via per-page
dynamic `import('firebase/firestore')` — Vite will split further.

### 16. Phone performance of roughjs-based sketch illustrations
`roughjs` redraws SVG on every render. On lower-end Android this is
jittery while scrolling. Memoize the sketch nodes with `useMemo` keyed
on size/color, or pre-render to inline SVG and stop shipping `roughjs`
at runtime (it's ~100 kB).

### 17. Service worker has no versioning
`firebase-messaging-sw.js` is served from `/seekship/` without a hash.
If you change push handling you'll fight browser SW caches. Move to a
Workbox-generated SW (`vite-plugin-pwa`) or add a `?v=<commit>` query
so the browser sees a new URL per deploy.
