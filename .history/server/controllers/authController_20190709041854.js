const passport    = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});

exports.authReq = async(req, res, next) => {
   const token = req.headers.jwtoken;
   const user = jwt.verify(token, process.env.MY_SECRET);
   if(user && user.exp < Date.now()){
      const isUser = await User.find({_id: user._id})
         .catch(error => res.json(error));
      isUser ? ()=>{ return next() } : ()=>{ return };
   }
   else res.json({status: 401, statusText: 'Your are not authorized to perform this request, please Login or Register'});
}

exports.authResult = (req, res) => {
   console.log('Success');
}