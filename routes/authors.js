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

        res.json(authors[authors.length - 1]);
      
    }else
    {
        res.json({ error: "Insufficient Data" });
    }
        
})


//PATCH

authorsRouter.patch("/:id", (req, res, next) => {
    console.log(req.body);
   const author = authors.find((author, i) => {
    if (author.id === Number(req.params.id)) {
        for (const key in req.body)
        {
            authors[i][key] = req.body[key];
        }
        return true;
    }
   })
 if(author)  res.json(author);

 else next(); 
})

//DELETE
authorsRouter.delete("/:id", (req, res, next) => {

   const author = authors.find((author, i) => {
     console.log(author);
        if(author.id === Number( req.params.id))
        {
            authors.splice(i,1);
            return true;
        }
        
     })
  //   console.log(author);
     if (author) res.json(author);
     else next();
})


module.exports = authorsRouter;