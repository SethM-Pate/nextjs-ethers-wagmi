const express = require('express');
const app = express();
const webhookRoutes = require('./backend/routes/webhook'); // Ensure this path is correct

// Middleware to parse JSON bodies
app.use(express.json());

// Use the webhook routes
app.use('/webhook', webhookRoutes); // Ensure '/webhook' is the base path

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3002; // Changed port number to 3002

// Start the server and listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Webhook endpoint URL: http://gofelix.app:${PORT}/webhook`);
    // Note: Make sure to configure DNS for gofelix.app to point to 3.22.199.79
    // If using HTTPS in production, setup SSL and adjust the URL accordingly
});