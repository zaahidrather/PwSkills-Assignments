require('dotenv').config();
const path = require('path');
const express = require('express');
const authRouter = require('../router/userRoute.js');
const connectToDb = require('../config/databaseConfig.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Initialize connection to database
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data (works fine with HTML forms)
app.use(cookieParser());
app.use(cors())

// Set EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../frontend/views'));

// Serve static files (CSS, JS, images) from the 'assets' folder
const staticPath = path.join(__dirname, "../../frontend");
app.use(express.static(staticPath));

app.use('/api/auth', authRouter);

module.exports = app;