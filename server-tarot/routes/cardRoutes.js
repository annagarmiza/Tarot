const express = require("express");
const cardController = require("./../controllers/cardController");

const router = express.Router();

router
  .route("/")
  .get(cardController.getAllCards)
  .post(cardController.createCard);

router
  .route("/:id")
  .get(cardController.getCard)
  .patch(cardController.updateCard);

router.route("/reading").post(cardController.getInterpretation);

module.exports = router;
