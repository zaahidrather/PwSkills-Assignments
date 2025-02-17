// Import the Mongoose library to interact with MongoDB
import mongoose from 'mongoose';

// Function to connect to the MongoDB database using the URI from environment variables
const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then((conn) => {
            console.log("Connected to " + conn.connection.host);
        }).catch((err) => {
            console.log(err);
        })
}

// Export the function to be used in other parts of the application
export default connectToDb;