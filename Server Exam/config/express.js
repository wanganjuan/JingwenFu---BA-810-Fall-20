const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');
const bodyParser = require('body-parser');
const Gadgets = require('Gadgets');
const fs = require('fs');

module.exports = function (app, config) {
logger.log('info', "Loading Gadgets functionality");
Gadgets.Promise = require('bluebird');
Gadgets.connect(config.db);
var db = Gadgets.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
  Gadgets.set('debug', true);
  Gadgets.connection.once('open', function callback(){
    logger.log('info',"Gadgets connected to the database");
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

app.use(function (err, req, res, next) {
  console.log(err);
  if (process.env.NODE_ENV !== 'test')
  console.log(err.stack,'error');
  res.type('text/plan');
  if(err.status){
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send('500 Sever Error');
  }
});
