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
    process.env.FRONTEND_URL // Will add this in deployment
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

app.use(errorHandler);

// Basic Route
app.get('/api/test', (req, res) => {
    res.send('API is running...');
});

// Serve Static Assets in production
if (process.env.NODE_ENV === 'production') { 
    const frontendPath = path.join(__dirname, '../Frontend/dist');
    app.use(express.static(frontendPath));

    // Handle any other routes by serving index.html
    app.get('(.*)', (req, res) => {
        // Check if the path starts with /api - if so, don't serve index.html
        if (!req.url.startsWith('/api')) {
            res.sendFile(path.join(frontendPath, 'index.html'));
        } else {
            res.status(404).json({ message: 'API Route Not Found' });
        }
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
