const mongoose = require('mongoose');
const Card = require('./cardSchema.js');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

// created schema for List
var listSchema = new mongoose.Schema({
  list_id: Number,
  list_name: String,
  position: Number,
  // created_date: Date,
  // updated_date: Date,
  _cards: { type : Array , "default" : [] }
});

var List = mongoose.model('List', listSchema);

module.exports = List;