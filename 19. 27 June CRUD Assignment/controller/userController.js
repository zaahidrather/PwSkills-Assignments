// Importing bcrypt module




import bcrypt from "bcrypt";

// Importing model
import USER from "../models/userModel.js";

// Login Controller
export async function login(req, res) {

    // Destructuring request body to extract values.
    const { email, password } = req.body;

    try {

        // Validate that both email and password are provided
        if (!email || !password) {
            res.status(400).json({ msg: "All input fields are required" });

        } else {

            // email validation
            const user = await USER.findOne({ email: email });

            if (!user) {
                res.status(400).json({ msg: "No account associated with this email" });

            } else {

                // password validation
                const isValid = await bcrypt.compare(password, user.password);

                if (!isValid) {
                    res.status(401).json({ msg: "Password is wrong" });

                } else {
                    res.status(200).json({ msg: "User login successfully" });

                }
            }
        }

    } catch (error) {
        res.status(400).json({
            successs: false,
            message: error.message,
        });
    }

}

// Register controller
export async function register(req, res) {
    try {

        // Destructuring request body to extract values.
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ msg: "All input fields are required" });

        } else {

            // Manually checking if email already associated with some user 
            const userExists = await USER.findOne({ email });

            if (userExists) {
                res.status(400).json({ msg: 'User already exists' })

            } else {

                // Hashing the password
                const hash = await bcrypt.hash(password, 10);

                // Adding document to database
                const user = await USER.create({
                    name,
                    email,
                    password: hash
                });

                // Response upon successfully creating the document in db
                if (user) {

                    res.status(201).json({
                        success: true,
                        message: "User created successfully"
                    });

                    // Response upon failing to creating the document in db
                } else {
                    res.status(500).json({
                        success: false,
                        message: "Internal Server Error", // Generic message for server errors
                    });
                }

            }
        }

    } catch (error) {
        res.status(400).json({
            successs: false,
            message: error.message,
        });
    }
}

