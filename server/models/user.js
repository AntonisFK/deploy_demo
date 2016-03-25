
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  comment: String
});

mongoose.model('User', UserSchema);
