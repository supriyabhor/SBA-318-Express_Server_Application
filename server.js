const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const authorsRouter = require("./routes/authors");
const booksRouter = require("./routes/books");
const reviewsRouter = require("./routes/reviews");

app.use("/authors", authorsRouter);
app.use("/books", booksRouter);
app.use("/reviews", reviewsRouter);



// app.get("/", (req, res) => {
//       res.send("Welcome");
//     });

// Error-handling middleware (optional)
   app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(400).json({ message: 'Something went wrong!' });
  });
  


app.listen(PORT, () => {
    console.log("Server is Running");
})
