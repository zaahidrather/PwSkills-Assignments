// Import the Express framework for building web applications
import express from 'express';
// Import the CORS middleware to enable Cross-Origin Resource Sharing
import cors from 'cors';
// Import the database connection function from the config directory
import connectToDb from './config/db.js';
// Import user-related routes from the userRoutes module
import userRoutes from './routes/userRoutes.js';

// // Load environment variables from the .env file into process.env
import 'dotenv/config';

const app = express();

// Middlewares 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database initialization
connectToDb();

// Mount the (router) user routes at the root path ('/')
app.use('/', userRoutes);

export default app;