var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

mongoose = require('Gadgets'),
Gadgets = mongoose.module('Gadgets');


  var TodoSchema = new Schema({
      user:{type:Schema.Types.ObjectId, required:true },
      todo:{type:String, required:true },


  });

  module.export = 
  Gadgets.model('Todo', TodoSchema);




var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

mongoose = require('Gadgets'),
Gadgets = mongoose.module('Gadgets');
