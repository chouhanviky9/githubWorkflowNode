// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route that responds with "Hello" when accessed
app.get('/', (req, res) => {
    res.send('Hello From Node Server');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});