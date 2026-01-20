require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Allow all for ngrok or specific frontend
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/content', require('./routes/contentRoutes'));

// Legacy endpoint support (optional, redirects to new structure if needed)
// app.post('/api/contact', require('./controllers/leadController').createLead);

// Health Check
app.get('/api/health', (req, res) => {
  console.log('--- Health Check Hit [' + new Date().toISOString() + '] ---');
  res.json({ status: 'ok', message: 'Backend is running' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Server Error'
  });
});

// Start server if running directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n🚀 SIRAH DIGITAL Backend Server`);
    console.log(`📍 Server running on http://localhost:${PORT}`);
    console.log(`💽 MongoDB URI: ${process.env.MONGO_URI ? 'Defined' : 'Not Defined'}`);
  });
}

module.exports = app;
