import app from './app.js';

// Get port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});