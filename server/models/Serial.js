const mongoose = require('mongoose');


const serialSchema = new mongoose.Schema({
    
    serial: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    }, 
    market: {
       type: String,
       trim: true,
       lowercase: true
    },
    authNo: {
       type: Number,
       default: 0
    }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

module.exports = mongoose.model('Serial', serialSchema);
