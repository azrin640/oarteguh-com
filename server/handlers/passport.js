const User = require('../models/User');
const passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Linkedin 
passport.use(new LinkedInStrategy({
      clientID: process.env.LINKEDIN_KEY,
      clientSecret: process.env.LINKEDIN_SECRET,
      callbackURL: 'https://azrin.dev/contact-me',
      scope: ['r_emailaddress', 'r_basicprofile'],
      state: true
   }, 
   function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {

         return done(null, profile);

      });
}));