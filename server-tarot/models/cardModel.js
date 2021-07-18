const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  number: Number,
  numberRoman: String,
  type: String,
  acrana: String,
  keys: [String],
  meaning: String,
  img: String,
  element: String,
  suit: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
