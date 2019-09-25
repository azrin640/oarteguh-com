const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('express-validator');

const likeSchema = new mongoose.Schema({ 
   created: { type: Date, default: Date.now() },
   owner: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ],
   voteUp: { type: Boolean, default: false },
   voteDown: { type: Boolean, default: false }
},
{
   toJSON: {virtuals: true},
   toObject: {virtuals: true}
});
            
module.exports = mongoose.model('Like', likeSchema);