// Import the express module to create routes
import express from "express";

// Import the login and register controller functions
import { login, register } from "../controller/userController.js";

// Create a new router instance
const router = express.Router();

// Defining the routes for login and register
router.post("/login", login);
router.post("/register", register);

// Export the router to be used in the main app
export default router;
