

const express = require('express');
const app = express();

let counter = 0; // Initialize the counter variable

// Route to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter }); // Send counter as JSON
});

// Route to increment the counter
app.get('/increment', (req, res) => {
  counter++; // Increment counter
  res.json({ counter }); // Send updated counter
});

// Route to decrement the counter
app.get('/decrement', (req, res) => {
  counter--; // Decrement counter
  res.json({ counter }); // Send updated counter
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
