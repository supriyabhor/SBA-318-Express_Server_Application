const express = require("express");
const app = express();
const PORT = 3000;

const authors = require("./data/authors");
const books = require("./data/books");

const authorsRouter = require("./routes/authors");
const booksRouter = require("./routes/books");

app.use("/authors", authorsRouter);


// app.get("/", (req, res) => {
//       res.send("Welcome");
//     });

// app.get("/", (req, res) => {
//    // res.json(authors); 
//   });
  


app.listen(PORT, () => {
    console.log("Server is Running");
})
