const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy(
    { usernameField: 'password' },
    async (password, done) => {
        try {
            const user = await User.findOne({}).exec();
            if (!user || !(await user.comparePassword(password))) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            user.loginCount += 1;
            await user.save();
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id).exec();
        done(null, user);
    } catch (err) {
        done(err);
    }
});