const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

module.exports = function (app, config) {
logger.log('info', "Loading Mongoose functionality");
mongoose.Promise = require('bluebird');
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
  mongoose.set('debug', true);
  mongoose.connection.once('open', function callback(){
    logger.log('info',"Mongoose connected to the database");
  });
  app.use(function (req, res, next){
    logger.log('Request from' + req.connection.remoteAddress, 'info');
    next();
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(config.root + '/public'));

var models = fs.readdirSync('./app/model');
models.forEach((model) => {
require('../app/models/' + model);
});

var controllers = fs.readdirSync('./app/controllers');
controllers.forEach((controller) => {
  controller = require('./app/controllers/' + controller)(app,config);
});

app.use(function (req,res) {
  res.type('text/plan');
  res.status(404);
  res.send('404 Not Found');
})}
