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
| Firestore security rules deployed | ✅ Done |
| `.env.local` written with config keys | ✅ Done |

## What you must do manually (1 step, ~1 min)

### Enable Google Sign-In
1. Go to https://console.firebase.google.com/project/seekship/authentication/providers
2. Click **Google** → toggle Enable → save

That's it. This cannot be done via CLI.

## .env.local values (already written to file)
```
VITE_FIREBASE_API_KEY=AIzaSyBukjka4ltMt_ODPVDnHsgNZ15H-f--xNM
VITE_FIREBASE_AUTH_DOMAIN=seekship.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seekship
VITE_FIREBASE_STORAGE_BUCKET=seekship.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=273649514086
VITE_FIREBASE_APP_ID=1:273649514086:web:60156edf65ef8ff2659fa7
VITE_FIREBASE_VAPID_KEY=          ← fill this later (FCM push, Feature 3)
```

## Firestore Security Rules (deployed)
- Users can read/write only their own doc
- Any authenticated user can read partner's doc (needed for partner linking)
- Invite codes readable/writable by any authenticated user
- Messages readable/writable only by sender or recipient

## Next Steps
1. Enable Google Auth (link above, 1 min)
2. Run `npm run dev` → test login at http://localhost:5173/seekship/
3. Verify user doc appears in Firestore Console after login
4. Once verified → build Feature 2 (partner invite)

## GitHub Pages (after GitHub repo created)
Add these as Repository Secrets (Settings → Secrets → Actions):
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_VAPID_KEY
```
Then add `fanbyprinciple.github.io` to Firebase Console → Authentication → Authorized Domains.
