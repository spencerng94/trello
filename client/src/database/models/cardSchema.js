var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created schema for Card
var cardSchema = new mongoose.Schema({
  card_id: Number,
  list_id: Number,
  card_name: String,
  position: Number
  // created_date: Date,
  // updated_date: Date,
});


var Card = mongoose.model('Card', cardSchema);

module.exports = Card;