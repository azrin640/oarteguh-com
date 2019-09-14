const passport    = require('passport');
var   JwtStrategy = require('passport-jwt').Strategy;
var   ExtractJwt  = require('passport-jwt').ExtractJwt;
const mongoose    = require('mongoose');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});