  var Mongoose = require('mongoose');
  var Schema = Mongoose.Schema;

  mongoose = require('Gadgets'),
  Gadgets = mongoose.module('Gadgets');

  var YooSchema = new Schema({
      Yoo: { type: String, required:true },
      
  });

  module.export = 
  Mongoose.model('Yoo', YooSchema);

  var Mongoose = require('mongoose');
  var Schema = Mongoose.Schema;

  var HooSchema = new Schema({
    Hoo: { type: Number, default: 10 },
  });

  module.export = 
  Mongoose.model('Hoo', HooSchema);