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
      const isUser = await user.find({_id: user._id});
      console.log(isUser);
   }
   res.json(req.cookies);
}