const express = require('express');
const passport = require('passport');
const User = require('../models/User');
require('../config/passport');

const router = express.Router();
// Login route
router.post('/login', (req, res, next) => {
    console.log('Login request body:', req.body);
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error('Authentication error:', err);
            return next(err);
        }
        if (!user) {
            console.log('Authentication failed:', info.message);
            return res.status(401).json({ message: info.message });
        }

        req.logIn(user, (err) => {
            if (err) {
                console.error('Session error:', err);
                return next(err);
            }
            console.log('Login successful, user:', user);
            return res.status(200).json({ loginCount: user.loginCount });
        });
    })(req, res, next);
});

// Logout route
router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: 'Logout failed.' });
        res.status(200).json({ message: 'Logged out successfully.' });
    });
});

module.exports = router;