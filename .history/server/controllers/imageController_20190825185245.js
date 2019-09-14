const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const jimp = require('jimp');
const multer = require('multer');
const uuidv4 = require('uuid/v4');

const multerOptions = {
   storage: multer.memoryStorage(),
   fileFilter(req, file, next) {
     const isPhoto = file.mimetype.startsWith('image/');
     console.log('Checking mimetype');
     if(isPhoto) {
       next(null, true);
     } else {
       res.json({ 
          status: 415, 
          statusText: 'Unsupported media type. Please make sure your file is an image file.' 
      });
     } }
};


exports.uploadSingle = multer(multerOptions).single('name');

exports.resize = async (req, res, next) => {  
   console.log('Receiving file buffer.'); 
   console.log(req.file);
   if (!req.file) {
       res.json({ 
          status: 412, 
          statusText: 'Precondition failed. '
      })
   }
   if(req.file){
      console.log('Processing file name');
       const extension = req.file.mimetype.split('/')[1];
       const fileName = `${uuidv4()}.${extension}`.toLowerCase();
      //  req.file.fileName = fileName;
       var buffer = req.file.buffer;

       console.log(`Resizing file: ${fileName}`);
       //Now resize and upload file/photos to public/uploads
       const photo = await jimp.read(buffer);
       await photo.resize(400, jimp.AUTO);
       await photo.write(`src/assets/images/uploads/${fileName}`);
       buffer = '';
       res.json({ image: fileName });
   }    
};





