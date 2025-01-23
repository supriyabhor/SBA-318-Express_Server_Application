const express = require("express");
const authors = require("../data/authors");

const authorsRouter = express.Router();

authorsRouter.get("/", (req, res) => {
  res.json(authors);
})

module.exports = authorsRouter;