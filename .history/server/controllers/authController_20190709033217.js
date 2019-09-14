const passport    = require('passport');
var   JwtStrategy = require('passport-jwt').Strategy;
var   ExtractJwt  = require('passport-jwt').ExtractJwt;
const mongoose    = require('mongoose');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});

exports.authReq = async(req, res, next) => {
   console.log(req.headers);
   const token = req.headers.authorization;
   const user = ExtractJwt.fromHeader('authorization').toString();
   console.log(user); 
   res.json(req.cookies);
}