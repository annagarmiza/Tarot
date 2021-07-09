const mongoose = require("mongoose");

const cardSpreadSchema = new mongoose.Schema({
  layoutName: String,
  cardsQuantity: Number,
  layout: {
    type: [
      {
        placement: {
          x: Number,
          y: Number,
        },
        meaning: String,
      },
    ],
  },
});

const CardSpread = mongoose.model(
  "CardSpread",
  cardSpreadSchema,
  "card_spreads"
);

module.exports = CardSpread;
