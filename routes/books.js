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

//PATCH

booksRouter.patch("/:id", (req, res, next) => {
    console.log(req.body);
   const book = books.find((book, i) => {
    if (book.id === Number(req.params.id)) {
        for (const key in req.body)
        {
            books[i][key] = req.body[key];
        }
        return true;
    }
   })

 if(book)  res.json(book);

 else next(); 
})

//DELETE
booksRouter.delete("/:id", (req, res, next) => {

    const book = books.find((book, i) => {
      console.log(book);
         if(book.id === Number( req.params.id))
         {
             books.splice(i,1);
             return true;
         }
         
      })
   //   console.log(book);
      if (book) res.json(book);
      else next();
 })

module.exports = booksRouter;