import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

// --- DATABASE LOGIC (Inlined for Vercel Stability) ---
let cached = globalThis.mongoose;
if (!cached) cached = globalThis.mongoose = { conn: null, promise: null };

async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        console.log('=> New DB Connection...');
        cached.promise = mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        }).then(m => m);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

// --- MODEL ---
const Lead = mongoose.models.Lead || mongoose.model('Lead', new mongoose.Schema({
    firstName: String, lastName: String, email: String, phone: String, company: String, message: String
}, { timestamps: true }));

// --- ROUTES ---
app.get('/api/ping', (req, res) => res.json({ pong: true, version: '1.0.4' }));

app.post('/api/leads', async (req, res) => {
    console.log('=> POST /api/leads', req.body);
    try {
        // Hard timeout for DB connection
        await Promise.race([
            connectDB(),
            new Promise((_, reject) => setTimeout(() => reject(new Error('DB Timeout')), 6000))
        ]);

        const lead = await Lead.create(req.body);
        res.status(201).json({ success: true, message: 'Message received!', id: lead._id });

        // Trigger n8n (Non-blocking)
        if (process.env.N8N_WEBHOOK_URL) {
            fetch(process.env.N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...req.body, leadId: lead._id })
            }).catch(e => console.error('n8n error:', e.message));
        }
    } catch (err) {
        console.error('ERROR:', err.message);
        res.status(500).json({ success: false, message: err.message });
    }
});

// Catch-all
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Not Found: ${req.url}`, version: '1.0.4' });
});

export default app;
