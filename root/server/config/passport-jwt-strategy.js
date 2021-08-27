const passport = require('passport');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
require('dotenv').config();
const options = {};

options.jwtFromRequest = ExtractJWT.fromUrlQueryParameter('JWT_KEY') != undefined ? ExtractJWT.fromUrlQueryParameter('JWT_KEY') : ExtractJWT.fromHeader('JWT_KEY');
options.secretOrKey = process.env.JWT_KEY;

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = passport;