const mongoose = require('mongoose');

// Use a variable to track connection status
let isConnected = false;

const connectDB = async () => {
    if (isConnected && mongoose.connection.readyState === 1) {
        return;
    }

    try {
        if (!process.env.MONGO_URI) {
            console.warn('⚠️ No MONGO_URI found');
            return;
        }

        console.log('=> Connecting to database...');
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });

        isConnected = true;
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        isConnected = false;
        throw error;
    }
};

module.exports = connectDB;
