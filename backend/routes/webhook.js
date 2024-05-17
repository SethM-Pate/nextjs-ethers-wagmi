const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Use bodyParser middleware to parse JSON bodies
router.use(bodyParser.json());

// Define a route to handle webhook POST requests
router.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    // Respond to the webhook sender to confirm the payload was received successfully
    res.status(200).send('Payload received');
});

module.exports = router;
