require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
// connectDB() is now called inside controller/routes for serverless consistency

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/content', require('./routes/contentRoutes'));

// Health Checks
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
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
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Server Error'
  });
});

// Start server
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

module.exports = app;
