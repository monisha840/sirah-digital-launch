import mongoose from 'mongoose';

// Use globalThis for better cross-environment compatibility in ESM
let cached = globalThis.mongoose;

if (!cached) {
    cached = globalThis.mongoose = { conn: null, promise: null };
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
            serverSelectionTimeoutMS: 5000, // Timeout faster for serverless
            heartbeatFrequencyMS: 1000,
            socketTimeoutMS: 30000,
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
