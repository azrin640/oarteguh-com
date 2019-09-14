"use strict";
const nodemailer = require('nodemailer');
const pug = require('pug');

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "8209f980356b7a",
     pass: "23f1db82635be2"
   }
 });
 const from = 'AZRIN.DEV Admin <admin@azrin.dev>';
 const company = 'azrin.dev';
 const baseUri = 'http://localhost:4200/user/';



exports.authEmail = async (options) => {
   console.log(options);
   let data = {
      title: 'AZRIN.DEV Email Authentication',
      uri: `${baseUri}authentication/${options.authToken}`
   };

   const html = pug.renderFile(path.join(__dirname, 'views/email/auth-email.pug'), data);

   let message = {

      from,
      to       : options.to,
      subject  : 'AZRIN.DEV Email Authentication',
      html 
   };
   const email = await transport.sendMail(message)
      .catch(error => {return error});

   if(email) return email;

};

