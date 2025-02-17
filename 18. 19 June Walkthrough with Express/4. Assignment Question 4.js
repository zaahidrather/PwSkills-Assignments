const express = require('express');

const app = express();

const port = 1000;
const hostName = 'localhost';

app.get('/random', (req, res) => {
    res.json({random : Math.floor(Math.random()*10)});
})

app.listen(port, () => {
    console.log(`Server running at ${hostName}:${port}`);
})