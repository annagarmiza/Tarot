const Card = require("./../models/cardModel");

exports.getAllCards = async (req, res) => {
  try {
    //Filtering
    const queryObj = { ...req.query };
    console.log("This is Query Object", JSON.stringify(req.body));
    console.log("This is Query Object", JSON.stringify(queryObj));
    const excludeFields = ["page", "sort", "limit", "fields", "ids"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let query = Card.find(queryObj);

    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    }

    //Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(`,`).join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }
    //return multiple ids
    if (req.query.ids) {
      const ids = req.query.ids.split(`,`);
      console.log("IDS", req.query.ids);
      query = Card.find({ _id: { $in: ids } });
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

exports.getInterpretation = async (req, res) => {
  try {
    console.log("THIS IS INSIDE POST MOTHER FUCKERS", JSON.stringify(req.body));
    // const newCard = await Card.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        //card: newCard,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Data",
    });
  }
};
