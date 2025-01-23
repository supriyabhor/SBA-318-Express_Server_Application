const express = require("express");
const app = express();
const PORT = 3000;


const authorsRouter = require("./routes/authors");
const booksRouter = require("./routes/books");
const reviewsRouter = require("./routes/reviews");

app.use("/authors", authorsRouter);
app.use("/books", booksRouter);
app.use("/reviews", reviewsRouter);


// app.get("/", (req, res) => {
//       res.send("Welcome");
//     });

// app.get("/", (req, res) => {
//    // res.json(authors); 
//   });
  


app.listen(PORT, () => {
    console.log("Server is Running");
})
