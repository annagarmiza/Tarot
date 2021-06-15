const { Double } = require("bson");
const mongoose = require("mongoose");

const cardSpreadSchema = new mongoose.Schema({
  layoutName: String,
  cardsQuantity: Number,
  layout: {
    type: [
      {
        placement: {
          type: {
            x: Number,
            y: Number,
          },
        },
        meaning: String,
      },
    ],
  },
});

const CardSpread = mongoose.model("CardSpread", cardSpreadSchema);

module.exports = CardSpread;
