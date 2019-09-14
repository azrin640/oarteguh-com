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
 const from = 'AZRIN.DEV Admin <admin@azrin.dev>';
 const company = 'azrin.dev';



exports.authEmail = async (options) => {
   console.log(options);
   let message = {

      from,
      to       : options.to,
      subject  : 'AZRIN.DEV Email Authentication',
      html     :  `

         <h2>I LOVE U</h2>
         <p>Now click this: http://localhost:4200/user/authentication/${options.authToken}</p>

      `
   };
   const email = await transport.sendMail(message)
      .catch(error => {return error});

   if(email) return email;

};

