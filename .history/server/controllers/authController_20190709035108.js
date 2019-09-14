const passport    = require('passport');
const jwt = require('jsonwebtoken');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});

exports.authReq = async(req, res, next) => {
   console.log(req.headers);
   const token = req.headers.jwtoken;
   const user = jwt.verify(token, process.env.MY_SECRET);
   console.log(user); 
   res.json(req.cookies);
}