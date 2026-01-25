import mongoose from 'mongoose';

// Use a variable to track connection status
let isConnected = false;

const connectDB = async () => {
    if (isConnected && mongoose.connection.readyState === 1) {
        return;
    }

    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            console.error('❌ FATAL: MONGO_URI is missing from process.env');
            throw new Error('Database configuration missing (MONGO_URI)');
        }

        // Diagnostic log: masked URI to verify it's loaded correctly
        const maskedUri = uri.substring(0, 10) + '...' + uri.substring(uri.length - 5);
        console.log(`=> Attempting to connect to MongoDB (URI: ${maskedUri})`);

        // Force a 5s timeout to prevent Vercel from killing the function before we log
        const conn = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
            socketTimeoutMS: 30000,
        });

        isConnected = true;
        console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ DB_CONNECTION_FAILED: ${error.message}`);
        isConnected = false;
        throw error;
    }
};

export default connectDB;
