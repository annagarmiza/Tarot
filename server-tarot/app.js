//It's the convention to have all the Express configuration in app.js
const express = require("express");

const cardRouter = require("./routes/cardRoutes");
const cardSpreadRouter = require("./routes/cardSpreadRoutes");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//1. Middlewares
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }
//the express.json is a middleware- a function that can modify the incoming request data
//it's just a step the request go through whilt it's being processed
//in here the data from the body is added to the request object
app.use(express.json());

//2)Routes

app.use("/api/v1/cards", cardRouter);
app.use("/api/v1/spreads", cardSpreadRouter);

module.exports = app;
