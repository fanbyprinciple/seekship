"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPanicTriggered = exports.onNewMessage = void 0;
const admin = require("firebase-admin");
const firestore_1 = require("firebase-functions/v2/firestore");
admin.initializeApp();
const db = admin.firestore();
const messaging = admin.messaging();
async function getToken(uid) {
    var _a, _b;
    const snap = await db.doc(`users/${uid}`).get();
    return (_b = (_a = snap.data()) === null || _a === void 0 ? void 0 : _a.fcmToken) !== null && _b !== void 0 ? _b : null;
}
// New message → push to recipient
exports.onNewMessage = (0, firestore_1.onDocumentCreated)('messages/{messageId}', async (event) => {
    var _a, _b, _c, _d;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!data)
        return;
    const token = await getToken(data.toUid);
    if (!token)
        return;
    const senderSnap = await db.doc(`users/${data.fromUid}`).get();
    const senderName = (_d = (_c = (_b = senderSnap.data()) === null || _b === void 0 ? void 0 : _b.displayName) === null || _c === void 0 ? void 0 : _c.split(' ')[0]) !== null && _d !== void 0 ? _d : 'Your partner';
    await messaging.send({
        token,
        notification: {
            title: `${senderName} sent you a message`,
            body: data.text,
        },
        webpush: {
            notification: { requireInteraction: true },
            fcmOptions: { link: 'https://fanbyprinciple.github.io/seekship/message' },
        },
    });
});
// Panic triggered → push to partner
exports.onPanicTriggered = (0, firestore_1.onDocumentWritten)('panics/{partnershipId}', async (event) => {
    var _a, _b, _c, _d, _e, _f;
    const after = (_a = event.data) === null || _a === void 0 ? void 0 : _a.after.data();
    const before = (_b = event.data) === null || _b === void 0 ? void 0 : _b.before.data();
    // Only fire when panic becomes active (not on dismiss)
    if (!(after === null || after === void 0 ? void 0 : after.active) || (before === null || before === void 0 ? void 0 : before.active))
        return;
    const partnershipId = event.params.partnershipId;
    const activatedBy = after.activatedBy;
    const cause = after.cause;
    // Find the other UID from partnershipId (format: uid1_uid2)
    const uids = partnershipId.split('_');
    const partnerUid = uids.find(u => u !== activatedBy);
    if (!partnerUid)
        return;
    const token = await getToken(partnerUid);
    if (!token)
        return;
    const senderSnap = await db.doc(`users/${activatedBy}`).get();
    const senderName = (_e = (_d = (_c = senderSnap.data()) === null || _c === void 0 ? void 0 : _c.displayName) === null || _d === void 0 ? void 0 : _d.split(' ')[0]) !== null && _e !== void 0 ? _e : 'Your partner';
    const causeLabels = { food: 'is hungry', pain: 'is in pain', boredom: 'is bored' };
    const label = (_f = causeLabels[cause]) !== null && _f !== void 0 ? _f : 'needs you';
    await messaging.send({
        token,
        notification: {
            title: `${senderName} ${label}`,
            body: 'Open the app now.',
        },
        webpush: {
            notification: { requireInteraction: true },
            fcmOptions: { link: 'https://fanbyprinciple.github.io/seekship/home' },
        },
    });
});
//# sourceMappingURL=index.js.map