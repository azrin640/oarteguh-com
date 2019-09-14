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
   const token = req.headers.jwtoken;
   const user = ExtractJwt.fromHeader('jwtoken');
   console.log(user.name); 
   res.json(req.cookies);
}