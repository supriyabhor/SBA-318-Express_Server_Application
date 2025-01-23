const express = require("express");
const reviews = require("../data/reviews");

const reviewsRouter = express.Router();

reviewsRouter.get("/", (req, res) => {
  res.json(reviews);
})

module.exports = reviewsRouter;