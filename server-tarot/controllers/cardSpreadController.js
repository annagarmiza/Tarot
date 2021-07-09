const CardSpread = require("./../models/cardSpreadModel");

exports.getAllSpreads = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let query = CardSpread.find(queryObj);

    //Sorting
    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }

    const card_spreads = await query;
    res.status(200).json({
      status: "success",
      results: card_spreads.length,
      data: { card_spreads },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.getSpread = async (req, res) => {
  try {
    //const card = await Card.findOne({ _id: req.params.id });
    const spread = await CardSpread.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { card_spread },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};
