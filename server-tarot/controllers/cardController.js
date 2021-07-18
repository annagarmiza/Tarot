const Card = require("./../models/cardModel");

exports.getAllCards = async (req, res) => {
  try {
    //Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let query = Card.find(queryObj);
    console.log(query);

    //Sorting
    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }

    const cards = await query;
    res.status(200).json({
      status: "success",
      results: cards.length,
      data: { cards },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.getCard = async (req, res) => {
  try {
    //const card = await Card.findOne({ _id: req.params.id });
    const card = await Card.findById(req.params.id);
    console.log(card);
    res.status(200).json({
      status: "success",
      data: { card },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        card,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.createCard = async (req, res) => {
  try {
    const newCard = await Card.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        card: newCard,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Data",
    });
  }
};
