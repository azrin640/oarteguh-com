const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('express-validator');

const commentSchema = new mongoose.Schema({ 
   created: { type: Date, default: Date.now() },
   owner: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ],
   post: [ { type: mongoose.Schema.ObjectId, ref: 'Post' } ],
   content: { type: String, required: 'Please supply blog content' }
});
            
module.exports = mongoose.model('Comment', commentSchema);