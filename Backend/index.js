const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors({
    origin: function (origin, callback) {
        // Allow all origins dynamically to avoid CORS issues for static assets
        const allowed = origin || '*';
        callback(null, true);
    },
    credentials: true
}));

app.use(cookieParser());

// Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

const errorHandler = require('./middleware/error');

// API Routes
app.use('/api/v1/tours', require('./routes/tourRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/booking', require('./routes/bookingRoutes'));

app.get('/api/test', (req, res) => {
    res.send('API is running...');
});

app.use(errorHandler);

// ==========================
// SERVE REACT BUILD
// ==========================

const frontendPath = path.resolve(__dirname, "dist");

app.use(express.static(frontendPath));

// React Router fallback
app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});