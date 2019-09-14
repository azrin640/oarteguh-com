const passport    = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});

exports.decodeReq = async(req, res, next) => {
   const token = req.headers.jwtoken;
   const user = jwt.verify(token, process.env.MY_SECRET);
   if(user && user._id) res.locals.user = user;
   const unauthorized = {status: 401, statusText: 'Your are not authorized to perform this request, please Login or Register'};
   user ? next() : res.json(unauthorized);
}

exports.authResult = (req, res) => {
   console.log(res.locals.user);
}