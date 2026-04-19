"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPanicTriggered = exports.onNewMessage = void 0;
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");
const firestore_1 = require("firebase-functions/v2/firestore");
const params_1 = require("firebase-functions/params");
admin.initializeApp();
const db = admin.firestore();
const messaging = admin.messaging();
// Configurable base URL for notification deep-links so we don't hard-code a
// fork owner in production code. Set with:
//   firebase functions:config:set (legacy) or via deployment params.
const APP_BASE_URL = (0, params_1.defineString)('APP_BASE_URL', {
    default: 'https://fanbyprinciple.github.io/seekship',
    description: 'Public base URL used in FCM webpush deep-links.',
});
async function getToken(uid) {
    var _a, _b;
    const snap = await db.doc(`users/${uid}`).get();
    return (_b = (_a = snap.data()) === null || _a === void 0 ? void 0 : _a.fcmToken) !== null && _b !== void 0 ? _b : null;
}
async function clearStaleToken(uid) {
    try {
        await db.doc(`users/${uid}`).update({ fcmToken: admin.firestore.FieldValue.delete() });
    }
    catch (e) {
        logger.warn('clearStaleToken failed', { uid, error: String(e) });
    }
}
async function senderFirstName(uid) {
    var _a, _b;
    try {
        const snap = await db.doc(`users/${uid}`).get();
        const name = (_a = snap.data()) === null || _a === void 0 ? void 0 : _a.displayName;
        return (_b = name === null || name === void 0 ? void 0 : name.split(' ')[0]) !== null && _b !== void 0 ? _b : 'Your partner';
    }
    catch (_c) {
        return 'Your partner';
    }
}
async function safeSend({ token, toUid, title, body, link }) {
    var _a;
    try {
        await messaging.send({
            token,
            notification: { title, body },
            webpush: {
                notification: { requireInteraction: true },
                fcmOptions: { link },
            },
        });
        logger.info('push sent', { toUid, title });
    }
    catch (e) {
        const code = (_a = e === null || e === void 0 ? void 0 : e.code) !== null && _a !== void 0 ? _a : '';
        logger.error('push failed', { toUid, code, error: String(e) });
        // FCM tells us when a token is no longer registered — drop it so we
        // don't keep retrying forever.
        if (code === 'messaging/registration-token-not-registered' ||
            code === 'messaging/invalid-registration-token') {
            await clearStaleToken(toUid);
        }
    }
}
// New message → push to recipient
exports.onNewMessage = (0, firestore_1.onDocumentCreated)('messages/{messageId}', async (event) => {
    var _a, _b;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!data)
        return;
    const toUid = data.toUid;
    const fromUid = data.fromUid;
    const text = (_b = data.text) !== null && _b !== void 0 ? _b : '';
    const token = await getToken(toUid);
    if (!token) {
        logger.debug('no fcm token — skip push', { toUid });
        return;
    }
    const name = await senderFirstName(fromUid);
    await safeSend({
        token,
        toUid,
        title: `${name} sent you a message`,
        body: text.slice(0, 140),
        link: `${APP_BASE_URL.value()}/message`,
    });
});
// Panic triggered → push to BOTH partners. The partner gets the alert;
// the activator gets a confirmation so their device also rings (useful
// on iOS PWA where the activator's phone may be the one with the watch).
exports.onPanicTriggered = (0, firestore_1.onDocumentWritten)('panics/{partnershipId}', async (event) => {
    var _a, _b, _c;
    const after = (_a = event.data) === null || _a === void 0 ? void 0 : _a.after.data();
    const before = (_b = event.data) === null || _b === void 0 ? void 0 : _b.before.data();
    if (!(after === null || after === void 0 ? void 0 : after.active) || (before === null || before === void 0 ? void 0 : before.active))
        return;
    const partnershipId = event.params.partnershipId;
    const activatedBy = after.activatedBy;
    const cause = after.cause;
    const uids = partnershipId.split('_');
    if (uids.length !== 2) {
        logger.warn('bad partnershipId shape', { partnershipId });
        return;
    }
    const partnerUid = uids.find(u => u !== activatedBy);
    if (!partnerUid)
        return;
    const [partnerToken, selfToken] = await Promise.all([
        getToken(partnerUid),
        getToken(activatedBy),
    ]);
    const activatorName = await senderFirstName(activatedBy);
    const causeLabels = {
        food: 'is hungry', pain: 'is in pain', boredom: 'is bored',
    };
    const label = (_c = causeLabels[cause]) !== null && _c !== void 0 ? _c : 'needs you';
    const link = `${APP_BASE_URL.value()}/home`;
    const tasks = [];
    if (partnerToken) {
        tasks.push(safeSend({
            token: partnerToken,
            toUid: partnerUid,
            title: `${activatorName} ${label}`,
            body: 'Open the app now.',
            link,
        }));
    }
    else {
        logger.debug('partner has no fcm token — skip', { partnerUid });
    }
    if (selfToken) {
        tasks.push(safeSend({
            token: selfToken,
            toUid: activatedBy,
            title: `Panic sent to ${(await senderFirstName(partnerUid)) || 'partner'}`,
            body: `Cause: ${cause}. Waiting for them to acknowledge.`,
            link,
        }));
    }
    await Promise.all(tasks);
});
//# sourceMappingURL=index.js.map