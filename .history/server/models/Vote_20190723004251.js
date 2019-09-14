const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('express-validator');

const commentSchema = new mongoose.Schema({ 
   created: { type: Date, default: Date.now() },
   owner: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ],
   voteUp: { type: Boolean, default: false },
   voteDown: { type: Boolean, default: false }
});
            
module.exports = mongoose.model('Comment', commentSchema);