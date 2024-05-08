const express = require('express');
const bodyParser = require('body-parser'); // Required to parse JSON bodies
const app = express();
const PORT = 3000;

// Import the webhook router
const webhookRouter = require('./routes/webhookRoutes');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to serve static files
app.use(express.static('public'));

// Basic route that sends a response
app.get('/', (req, res) => {
  res.send('Hello World from Express server!');
});

// Mount the webhook route
app.use(webhookRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
