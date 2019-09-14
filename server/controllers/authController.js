const passport    = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const customErr = require('../handlers/customError');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});

exports.decodeReq = (req, res, next) => {
   const token = req.headers.jwtoken;
   const user = jwt.verify(token, process.env.MY_SECRET);
   if(user && user._id) res.locals.user = user;
   user ? next() : res.json(customErr.unauthorized);
};

exports.decodeAdminReq = (req, res, next) => {
   const token = req.headers.jwtoken;
   const user = jwt.verify(token, process.env.MY_SECRET);
   if(user && user._id && user.admin) {
      res.locals.user = user;
      return next();
   }
   else res.json({status: 401, statusText: 'Unauthorized'});
};

exports.getUser = async(req, res) => {
   const user = await User.find({ _id: res.locals.user });
   user ? next() : res.json(customErr.unauthorized);
};

exports.getUserProfile = async(req, res) => {
   const user = await User.find({ _id: res.locals.user });
   user ? res.json(user) : res.json(customErr.unauthorized);
};