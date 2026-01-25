import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import leadRoutes from '../server/routes/leadRoutes.js';
import connectDB from '../server/config/db.js';

const app = express();

// Middleware
app.use(cors());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Using both /api/leads and /leads to be safe with Vercel routing
app.use('/api/leads', leadRoutes);
app.use('/leads', leadRoutes);

// Health Checks
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running (Vercel ESM)' });
});

app.get('/api/health-db', async (req, res) => {
    try {
        await connectDB();
        res.json({ status: 'ok', database: 'connected' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// 404 handler
app.use((req, res) => {
    console.log(`404: Not Found - ${req.url}`);
    res.status(404).json({ success: false, message: `Route not found: ${req.url}` });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('SERVER_ERROR:', err.stack);
    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

export default app;
