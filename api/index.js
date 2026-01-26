import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import leadRoutes from '../server/routes/leadRoutes.js';
import authRoutes from '../server/routes/authRoutes.js';
import contentRoutes from '../server/routes/contentRoutes.js';
import connectDB from '../server/config/db.js';

const app = express();

app.use(cors());
app.use(express.json());

// Logger
app.use((req, res, next) => {
    console.log(`[v1.0.3] ${req.method} ${req.url}`);
    next();
});

// ABSOLUTE TOP PRIORITY DIAGNOSTICS
app.get('/api/ping', (req, res) => {
    res.json({ pong: true, version: '1.0.3', url: req.url });
});

app.get('/api/test', (req, res) => {
    res.json({ success: true, message: 'Wildcard diagnostic', url: req.url, path: req.path });
});

// Routes
app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', version: '1.0.3' });
});

app.get('/api/health-db', async (req, res) => {
    console.log('=> Health-DB check triggered');
    try {
        const connPromise = connectDB();
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Database connection timeout (8s limit)')), 8000)
        );

        await Promise.race([connPromise, timeoutPromise]);
        res.json({ status: 'ok', database: 'connected' });
    } catch (err) {
        console.error('=> Health-DB failed:', err.message);
        res.status(503).json({ status: 'error', message: err.message });
    }
});

// Catch-all Debugger
app.use((req, res) => {
    console.log(`[v1.0.3] 404: ${req.method} ${req.url}`);
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.url}`,
        tip: "Try /api/ping to test connection",
        version: "1.0.3"
    });
});

export default app;
