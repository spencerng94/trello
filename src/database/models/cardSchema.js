var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created schema for Card
var cardSchema = new mongoose.Schema({
  card_id: Number,
  card_name: {type: String, required: true},
  position: Number
  // created_date: Date,
  // updated_date: Date,
});


var Card = mongoose.model('card', cardSchema);

module.exports = Card;