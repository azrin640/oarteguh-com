"use strict";
const nodemailer = require('nodemailer');
const pug = require('pug');
const express = require('express');
const path = require('path');
const app = express();

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "8209f980356b7a",
     pass: "23f1db82635be2"
   }
 });
 const from = 'AZRIN.DEV Admin <admin@azrin.dev>';

exports.authEmail = async (options) => {
   const viewsPath = app.get('views');
   const uri = `localhost:4200/user/register/token/${options.authToken}`;
   let data = {
      title: 'AZRIN.DEV Email Authentication',
      to: options.to,
      uri
   };
   const html = pug.renderFile(viewsPath + '/email/auth-email.pug', data);
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

