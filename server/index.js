const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Configuration
const entryPassword = process.env.ABIGAILPASSWORD;
app.use(session({
    secret: entryPassword,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000, // 30 minutes
        secure: false // Set to true if using HTTPS
    }
}));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

// Database Connection
const mongoURI = process.env.MONGO_URL;
mongoose.connect(mongoURI)
    .then(() => console.log('Mongo Database Connected'))
    .catch((err) => console.log('Mongo Database NOT Connected', err));


// Flash Middleware (Optional, for flash messages)
app.use(flash());

// Routes
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;;
app.listen(port, () => console.log(`Server is running on port ${port}`));