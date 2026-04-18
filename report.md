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
| Message (send) | `/home` | Type + send note to partner |
| Message (inbox) | `/message` | View + acknowledge partner's message |
| Shared Checklist | `/checklist` | Real-time shared to-do list |

## Theme
Pencil sketch style — cream paper background, Caveat handwriting font, rough sketch borders, charcoal ink colors.
Reference image welcome if you want to adjust.

## .env.local values (already in file)
```
VITE_FIREBASE_API_KEY=AIzaSyBukjka4ltMt_ODPVDnHsgNZ15H-f--xNM
VITE_FIREBASE_AUTH_DOMAIN=seekship.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seekship
VITE_FIREBASE_STORAGE_BUCKET=seekship.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=273649514086
VITE_FIREBASE_APP_ID=1:273649514086:web:60156edf65ef8ff2659fa7
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
