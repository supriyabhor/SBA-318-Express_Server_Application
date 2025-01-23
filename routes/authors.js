const express = require("express");
const authors = require("../data/authors");

const authorsRouter = express.Router();



//GET

authorsRouter.get("/", (req, res) => {
  res.json(authors);
})

//POST


authorsRouter.post("/", (req, res) => {
    console.log(req.body);

    if (req.body.name && req.body.bio)
    {
        const newAuthor = {
            id: authors[authors.length - 1].id + 1,
            name: req.body.name,
            bio: req.body.bio
        };

        //push the new author 
        authors.push(newAuthor);

        res.status(201).json(authors[authors.length - 1]); // Send the newly created author
      
    }else
    {
        res.status(400).json({ error: "Insufficient data" });  // Handle the error case
    }
        
})




module.exports = authorsRouter;