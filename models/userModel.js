const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
     firstName: {
          type:String,
          require :true
     },
     lastName: {
          type:String,
          require :true
     },
     userName : {
          type:String,
          require :true
     },
     dateOfBirth : {
          type: Date,
          require :true
     },
     email : {
          type:String,
          require :true
     },
     password : {
          type:String,
          require :true
     }
});
module.exports = mongoose.model('User', userSchema);