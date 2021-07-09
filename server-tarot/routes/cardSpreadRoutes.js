const express = require("express");
const cardSpreadController = require("./../controllers/cardSpreadController");

const router = express.Router();

router.route("/").get(cardSpreadController.getAllSpreads);

router.route("/:id").get(cardSpreadController.getSpread);
module.exports = router;
