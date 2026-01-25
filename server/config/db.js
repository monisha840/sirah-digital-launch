const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.warn('⚠️ No MONGO_URI found in environment. Database operations will fail, but server will continue starting for testing.');
            return;
        }
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        console.info('ℹ️ Continuing in testing mode...');
    }
};

module.exports = connectDB;
