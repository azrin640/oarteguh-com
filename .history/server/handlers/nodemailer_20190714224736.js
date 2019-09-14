"use strict";
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "8209f980356b7a",
     pass: "23f1db82635be2"
   }
 });

exports.authEmail((options) => {
   console.log(options);
});

