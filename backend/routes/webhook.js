const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const DYNAMIC_SECRET = process.env.DYNAMIC_SECRET; // Make sure to set this environment variable

// Middleware to validate the signature
const validateSignature = (req, res, next) => {
    const signature = req.headers['x-dynamic-signature-256'];
    const payload = JSON.stringify(req.body);
    const hash = crypto.createHmac('sha256', DYNAMIC_SECRET).update(payload).digest('hex');

    if (signature === hash) {
        next();
    } else {
        res.status(400).send('Invalid signature');
    }
};

// Define the webhook endpoint
router.post('/webhook', validateSignature, (req, res) => {
    const event = req.body;
    console.log('Received webhook event:', event);

    // Process the webhook event here
    switch (event.eventName) {
        case 'user.created':
            console.log('User created event received:', event.data);
            break;
        case 'user.verified':
            console.log('User verified event received:', event.data);
            break;
        case 'user.profile.updated':
            console.log('User profile updated event received:', event.data);
            break;
        case 'user.wallet.linked':
            console.log('User wallet linked event received:', event.data);
            break;
        case 'user.session.created':
            console.log('User session created event received:', event.data);
            break;
        case 'user.onboarding.completed':
            console.log('User onboarding completed event received:', event.data);
            break;
        default:
            console.log('Unhandled event:', event.eventName);
    }

    res.status(200).send('Webhook received');
});

module.exports = router;