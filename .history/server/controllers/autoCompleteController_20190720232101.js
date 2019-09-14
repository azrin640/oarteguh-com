const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');
const { body } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mail = require('../handlers/mail');
const axios = require('axios');
const nodemailer = require('../handlers/nodemailer');

exports.reqCountries = async (req, res) => {

   console.log(req.body);
   const countries = 'Malaysia';
   res.json(countries);
}