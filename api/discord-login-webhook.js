const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Endpoint to handle login requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication (you can use your existing authentication logic here)
    // For simplicity, I'm just checking if the username is not empty
    if (username) {
        // Send notification to Discord webhook
        sendDiscordNotification(`User "${username}" logged in.`);
        res.send('Login successful!');
    } else {
        res.status(401).send('what');
    }
});

// Function to send notification to Discord webhook
async function sendDiscordNotification(message) {
    try {
        const webhookUrl = 'https://discord.com/api/webhooks/1210061210880450691/xJdUz7UFnPghJjnB_AnacGQovB3RbTspmtHkNSyV23ckaPsBCfzuIFWmVatabEGYxJGY';
        await axios.post(webhookUrl, { content: message });
    } catch (error) {
        console.error('Error sending Discord notification:', error.message);
    }
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
