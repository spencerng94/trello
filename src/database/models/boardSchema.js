var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created schema for Board
var boardSchema = new Schema({
  board_id: Number,
  board_name: {type: String, required: true},
  created_date: Date,
  updated_date: Date,
  _lists: {
      type: mongoose.Schema.Types.ObjectId, 
      ref:'List', 
      required: true }
});

var Board = mongoose.model('Board', boardSchema);

module.exports = Board;