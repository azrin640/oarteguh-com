const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('express-validator');

const commentSchema = new mongoose.Schema({ 
   created  :     { type: Date, default: Date.now() },
   owner    :     { type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true } ,
   post     :     { type: mongoose.Schema.ObjectId, ref: 'Post' } ,
   content  :     { type: String, required: 'Please supply comment' }
},
{
   toJSON: {virtuals: true},
   toObject: {virtuals: true}
});

commentSchema.plugin(require('mongoose-autopopulate'));
            
module.exports = mongoose.model('Comment', commentSchema);