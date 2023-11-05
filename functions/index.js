/**
 * Import function triggers from their respective submodules:
 *
 * 
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {onCall} = require("firebase-functions/v2/https");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

const { setGlobalOptions } = require("firebase-functions/v2");
setGlobalOptions({maxInstances: 10})

initializeApp();

exports.getTime = onRequest(async (req, res) => {
    const date = new Date();
    req;
    res.status(200).json({result: `${date}`});
  });

exports.getTimeLegacy = onCall((req) => {
    const date = new Date();
    return JSON.stringify({'date':date});
  });
