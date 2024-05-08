const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use bodyParser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route to handle webhook POST requests
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    // Respond to the webhook sender to confirm the payload was received successfully
    res.status(200).send('Payload received');
});

const PORT = 3000; // Choose a port to listen on

// Start the server and listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Webhook endpoint URL: http://gofelix.app:${PORT}/webhook`);
    // Note: Make sure to configure DNS for gofelix.app to point to 3.22.199.79
    // If using HTTPS in production, setup SSL and adjust the URL accordingly
});
