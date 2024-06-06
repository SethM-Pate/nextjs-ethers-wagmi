// routes/webhook.js
const express = require('express');
const router = express.Router();

// Define the webhook endpoint
router.post('/webhook', (req, res) => {
    const event = req.body;
    console.log('Received webhook event:', event);

    // Process the webhook event here

    res.status(200).send('Webhook received');
});

module.exports = router;
