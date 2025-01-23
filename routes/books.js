const express = require("express");
const books = require("../data/books");

const booksRouter = express.Router();

booksRouter.get("/", (req, res) => {
  res.json(books);
})

module.exports = booksRouter;