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

// Dynamic CORS
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(cookieParser());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - API Hit`);
    next();
});

const errorHandler = require('./middleware/error');

// Define Routes
app.use('/api/v1/tours', require('./routes/tourRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/booking', require('./routes/bookingRoutes'));

// Test API
app.get('/api/test', (req, res) => {
    res.send('API is running...');
});

// Error handler
app.use(errorHandler);

// --- STATIC ASSETS & REACT SERVING ---
const frontendPath = path.resolve(__dirname, "dist");

app.use(express.static(frontendPath));

/* FIXED ROUTE */
app.use((req, res, next) => {
    if (!req.url.startsWith('/api')) {
        return res.sendFile(path.join(frontendPath, 'index.html'));
    }
    next();
});

app.use((req, res) => {
    res.status(404).send("API route not found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});