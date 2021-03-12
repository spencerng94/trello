var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created schema for List
var listSchema = new Schema({
  list_id: Number,
  list_name: {type: String, required: true},
  position: Number,
  // created_date: Date,
  // updated_date: Date,
  _cards: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Card'
  }
});

var List = mongoose.model('List', listSchema);

module.exports = List;