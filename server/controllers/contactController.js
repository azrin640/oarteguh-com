const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Contact = mongoose.model('Contact');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');

// Create Mail Contact
exports.saveContactForm = async (req, res) => {
   const contact = new Contact({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      text: req.body.comment
   });

   const saveContact = await contact.save().catch(
      (error) => {
         res.json(error);
         return;
      }
   )
   res.json(saveContact);         
         
}