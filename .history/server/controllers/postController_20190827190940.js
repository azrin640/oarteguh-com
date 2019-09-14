const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const axios = require('axios');

const Post = require('../models/Post');

exports.createPost = async(req, res) => {
   const newPost = new Post(req.body); 
   let post = await newPost.save();
   if(post && post._id) res.json(post);
   else post.catch((error) => res.json(error));
}

exports.getAllPost = async(req, res) => {
   const posts = await Post.find();
   if(posts) res.json(posts);
   else posts.catch(error => res.json(error));
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

exports.getPost = async(req, res) => {
   console.log(req.body.id);
   const post = await Post.findOne({ _id: req.body.id });
   console.log(post);
   if(post && !error) res.json(post);
   else res.json(error);
}
