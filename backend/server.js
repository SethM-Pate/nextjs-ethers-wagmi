const express = require('express');
const app = express();
const webhookRoutes = require('./routes/webhook'); // Ensure this path is correct

// Use the webhook routes
app.use(webhookRoutes);

const PORT = process.env.PORT || 3000; // Choose a port to listen on

// Start the server and listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Webhook endpoint URL: http://gofelix.app:${PORT}/webhook`);
    // Note: Make sure to configure DNS for gofelix.app to point to 3.22.199.79
    // If using HTTPS in production, setup SSL and adjust the URL accordingly
});
