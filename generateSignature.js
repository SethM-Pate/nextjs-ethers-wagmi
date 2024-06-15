const crypto = require('crypto');

const DYNAMIC_SECRET = '355008d2ae8146e6e92e28e91d312a8e86c60d30f42b90cc44ea27a1487c3641'; // Replace with your actual secret

const generateSignature = (payload) => {
    const hash = crypto.createHmac('sha256', DYNAMIC_SECRET).update(JSON.stringify(payload)).digest('hex');
    return hash;
};

// Example payload
const payload = {
    "eventId": "example-event-id",
    "messageId": "example-message-id",
    "webhookId": "example-webhook-id",
    "eventName": "user.created",
    "environmentId": "example-environment-id",
    "environmentName": "sandbox",
    "timestamp": "2023-10-26T14:30:59.210Z",
    "data": {
        "userId": "example-user-id",
        "createdAt": "2023-10-26T14:30:02.909Z",
        "additionalData": "example-data"
    }
};

const signature = generateSignature(payload);
console.log('x-dynamic-signature-256:', signature);