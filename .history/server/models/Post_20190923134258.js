const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('express-validator');

const postSchema = new mongoose.Schema({
   created     :           { type: Date, default: Date.now() },
   owner       :           { type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true },
   categories  :     [     { type: String, lowercase: true } ],
   title       :           { type: String, required: 'Please supply blog title' },
   subtitle    :           { type: String, required: 'Please supply blog subtitle' },
   content     :           { type: String, required: 'Please supply blog content' },
   tags        :     [     { type: String } ],
   image       :           { type: String } ,
   slug        :           { type: String },
   comments    :     [     { type: mongoose.Schema.ObjectId, ref: 'Comment', autopopulate: true } ],
   like       :      [     { type: mongoose.Schema.ObjectId, ref: 'Like', autopopulate: true } ],
   shared      :           { type: Number, default: 0 }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

postSchema.plugin(require('mongoose-autopopulate'));
   
postSchema.statics.getCategories = function() {
   return this.aggregate([

     { $unwind: '$categories' },
     { $group: { _id: '$categories' } },
     { $sort: { _id: 1 } }

   ]);
};

postSchema.statics.getTags = function() {
   return this.aggregate([

     { $unwind: '$tags' },
     { $group: { _id: '$tags' } },
     { $sort: { _id: 1 } }

   ]);
};




module.exports = mongoose.model('Post', postSchema);