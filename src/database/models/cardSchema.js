var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created schema for Card
var cardSchema = new Schema({
  card_id: Number,
  card_name: {type: String, required: true},
  created_date: Date,
  updated_date: Date,
  _list: {type: Schema.Types.ObjectId, ref:'List'}
});


var Card = mongoose.model('card', cardSchema);

module.exports = Card;