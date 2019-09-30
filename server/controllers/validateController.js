const { body } = require('express-validator');
const { sanitizeBody } = require('express-validator');
const { validationResult } = require('express-validator');

function CheckVal(errors){
   if (errors) res.json({ errors: errors.array(), status: 422 });   
   else return next();
};

// User

exports.reqValidateUpdateProfile = (req, res, next) => { 
   
   let keys = Object.keys(req.body);   

   if(req.body.type === 'string'){
      req.sanitizeBody(keys[0]);
      req.check(keys[0]).not().isEmpty(); 
   }
   else if(req.body.type === 'date'){
      req.sanitizeBody(keys[0]);
      req.check(keys[0]).not().isEmpty(); 
   } 

   const errors = req.body.validationErrors;    
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) 
   } 
   return next();
};

exports.reqValidateAuth = (req, res, next) => {   
   req.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extensions: false,
      gmail_remove_subaddress: false 
   });
   req.check('email').not().isEmpty();
   req.sanitizeBody('password');
   req.check('password').not().isEmpty();   
   const errors = req.body.validationErrors; 
   
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

exports.reqValidateToken = (req, res, next) => {   
   req.sanitizeBody('authToken');
   req.check('authToken').not().isEmpty();   
   const errors = req.body.validationErrors; 
   
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

exports.reqValidateUserId = (req, res, next) => {   
   req.sanitizeBody('_id');
   req.check('_id').not().isEmpty();

   const result = CheckVal(req.body.validationErrors);
};

exports.reqValidateProfile = (req, res, next) => {

   req.sanitizeBody('_id');
   req.check('_id').not().isEmpty();

   req.sanitizeBody('username');
   req.check('username').not().isEmpty();

   req.sanitizeBody('birthday');
   req.check('birthday').not().isEmpty();

   req.sanitizeBody('handphone');
   req.check('handphone').not().isEmpty();

   req.sanitizeBody('address2');
   req.check('address2').not().isEmpty();

   req.sanitizeBody('city');
   req.check('city').not().isEmpty();

   req.sanitizeBody('state');
   req.check('state').not().isEmpty();

   req.sanitizeBody('username');
   req.check('username').not().isEmpty();

   req.sanitizeBody('postcode');
   req.check('postcode').not().isEmpty();

   req.sanitizeBody('country');
   req.check('country').not().isEmpty();

   const errors = req.body.validationErrors;  
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

exports.reqValidateForgotPassword = (req, res, next) => {
   req.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extensions: false,
      gmail_remove_subaddress: false 
   });

   const errors = req.body.validationErrors;  
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

// Post 
exports.reqValidateNewPost = (req, res, next) => {   
   req.sanitizeBody('title');
   req.check('title').not().isEmpty();   
   req.sanitizeBody('subtitle');
   req.check('subtitle').not().isEmpty(); 
   req.sanitizeBody('content');
   req.check('content').not().isEmpty(); 
   req.sanitizeBody('image');
   req.check('image').not().isEmpty(); 
   req.sanitizeBody('slug');
   req.check('slug').not().isEmpty();
   req.sanitizeBody('categories');
   req.check('categories').not().isEmpty(); 
   req.sanitizeBody('owner');
   req.check('owner').not().isEmpty(); 
   req.sanitizeBody('tags');
   req.check('tags').not().isEmpty(); 

   const errors = req.body.validationErrors; 
   
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

// Contact
exports.reqValidateContact = (req, res, next) => {
   req.sanitizeBody('name');
   req.check('name').not().isEmpty();

   req.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extensions: false,
      gmail_remove_subaddress: false 
   });
   req.check('email').not().isEmpty();

   req.sanitizeBody('phone');
   req.check('phone').not().isEmpty();

   req.sanitizeBody('comment');
   req.check('comment').not().isEmpty();

   const errors = req.body.validationErrors;  

   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

// Serial
exports.serialCreateValidation = (req, res, next) => {   
   req.check('serial1').not().isEmpty();
   req.sanitizeBody('serial');

   req.check('serial2').not().isEmpty();
   req.sanitizeBody('serial2');

   req.check('volume').not().isEmpty();
   req.sanitizeBody('volume');

   req.check('market').not().isEmpty();
   req.sanitizeBody('market');

   const errors = req.body.validationErrors; 
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

exports.serialValidation = (req, res, next) => {   
   req.check('serial').not().isEmpty();
   req.sanitizeBody('serial');

   const errors = req.validationErrors();  
   if(errors) res.json(errors);
   return next();
};

exports.newReviewValidation = (req, res, next) => {

   req.sanitizeBody('name');
   req.check('name').not().isEmpty();
   
   req.sanitizeBody('email').normalizeEmail({
       remove_dots: false,
       remove_extensions: false,
       gmail_remove_subaddress: false 
   });
   req.check('email').not().isEmpty();

   req.sanitizeBody('phone');
   req.check('phone').not().isEmpty();

   req.sanitizeBody('review');
   req.check('review').not().isEmpty();

   const errors = req.validationErrors();  
   if(errors) res.json(errors);
   return next();
};

exports.reqValidateNewComment = (req, res, next) => {

   req.sanitizeBody('_id');
   req.check('_id').not().isEmpty();

   req.sanitizeBody('content');
   req.check('content').not().isEmpty();

   req.sanitizeBody('owner');
   req.check('owner').not().isEmpty();

   req.sanitizeBody('post');
   req.check('post').not().isEmpty();

   const errors = req.body.validationErrors;  
   if (errors) {
      return res.json({ errors: errors.array(), status: 422 }) } 
   return next();
};

// Middleware to detect any validation error
exports.validationErrors = (req, res, next) => {
   const errors = req.body.validationErrors;
   if (errors) {      
      return res.json({ errors: errors.array(), status: 422 });    
   }
   else return next();
};
