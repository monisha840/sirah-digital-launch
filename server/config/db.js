import mongoose from 'mongoose';

// Global variable to cache the connection
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        console.log('=> Using existing database connection');
        return cached.conn;
    }

    if (!process.env.MONGO_URI) {
        console.error('❌ FATAL: MONGO_URI is missing from process.env');
        throw new Error('Database configuration missing (MONGO_URI)');
    }

    if (!cached.promise) {
        const opts = {
            serverSelectionTimeoutMS: 8000, // Hard limit for serverless
            heartbeatFrequencyMS: 1000,
        };

        console.log('=> Creating new database connection...');
        cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
            console.log('✅ MongoDB Connected successfully');
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error(`❌ DB_CONNECTION_FAILED: ${e.message}`);
        throw e;
    }

    return cached.conn;
}

export default connectDB;
