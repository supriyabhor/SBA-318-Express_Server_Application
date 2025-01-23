const express = require("express");
const books = require("../data/books");

const booksRouter = express.Router();

// GET
booksRouter.get("/", (req, res) => {
  res.json(books);
})



//POST

booksRouter.post("/", (req, res) => {
    console.log(req.body);

    if (req.body.title && req.body.authorId && req.body.genre)
    {
        const newBook = {
            id: books[books.length - 1].id + 1,
            title: req.body.title,
            authorId: req.body.authorId,
            genre: req.body.genre
        };

        //push the new author 
        books.push(newBook);

        res.json(books[books.length - 1]);
      
    }else
    {
        res.json({ error: "Insufficient Data" });
    }
        
})

module.exports = booksRouter;