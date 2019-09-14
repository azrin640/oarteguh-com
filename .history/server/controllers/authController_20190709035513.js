const passport    = require('passport');
const jwt = require('jsonwebtoken');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});

exports.authReq = async(req, res, next) => {
   const token = req.headers.jwtoken;
   const user = jwt.verify(token, process.env.MY_SECRET);
   if(user && user.exp < Date.now()){
      console.log(Date.now());
      console.log('valid');
   }
   res.json(req.cookies);
}