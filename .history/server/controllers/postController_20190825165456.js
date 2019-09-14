const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const axios = require('axios');

const Post = require('../models/Post');

exports.createPost = async(req, res) => {
   console.log(req.body);
   const newPost = new Post(req.body);   

   let post = await newPost.save()
      .catch(error => res.json(error));
   if(post) res.json(post);
}

exports.getCategories = async(req, res) => {
   const categories = await Post.getCategories()
      .catch(error => res.json(error));
   if(categories) {
      let cats = categories.map((cat) => {
         return cat._id;
      });
      res.json(cats);
   }
}

exports.getTags = async(req, res) => {
   const tags = await Post.getTags()
      .catch(error => res.json(error));
   if(tags) {
      let tagsFound = tags.map((tag) => {
         return tag._id;         
      });
      res.json(tagsFound);
   }
}
