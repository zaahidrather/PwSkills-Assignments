const mongoose = require('mongoose');

const connectToDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to database at host: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        process.exit(1); // Exit process if connection fails
    }
}

module.exports = connectToDb;