// This is our mongoose.js file located in /config/mongoose.js
// This is a config file that connects to MongoDB and loads all of our models for us. We do this here because we don't want to have to connect to the DB every time we require a model!
// require mongoose
var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/Demo');

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' +file);
  }
})