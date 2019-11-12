var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

mongoose = require('Gadgets'),
Gadgets = mongoose.module('Gadgets');


  var UserSchema = new Schema({
      Yoo: { type: String, required:true },
      Hoo: { type: Number, default: 10 },
  });

  module.export = 
  Gadgets.model('User', UserSchema);