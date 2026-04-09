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

// CORS - allow frontend origins
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    process.env.FRONTEND_URL,  // set this in Render env vars
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, etc.) AND listed origins
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(null, true); // still allow for now during dev; tighten in prod
        }
    },
    credentials: true
}));

app.use(cookieParser());

// Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


// API Routes
app.use('/api/v1/tours', require('./routes/tourRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/booking', require('./routes/bookingRoutes'));

app.get('/api/test', (req, res) => {
    res.send('API is running...');
});

// ==========================
// SERVE REACT BUILD
// ==========================

// Resolve path to the Vite build output (Frontend/dist)
const frontendPath = path.resolve(__dirname, "../Frontend/dist");

app.use(express.static(frontendPath));

// React Router fallback
app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

const errorHandler = require('./middleware/error');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});