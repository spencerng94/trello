// var mongoose = require('mongoose');
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// created schema for Board
var boardSchema = new Schema({
  board_id: Number,
  board_name: {type: String, required: true},
  created_date: Date,
  updated_date: Date,
//   _user: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
  _lists: [{type: mongoose.Schema.Types.ObjectId, ref:'List', required: true }]
});

var Board = mongoose.model('Board', boardSchema);

// module.exports = Board;

export default Board;