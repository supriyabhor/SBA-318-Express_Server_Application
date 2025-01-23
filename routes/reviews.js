const express = require("express");
const reviews = require("../data/reviews");

const reviewsRouter = express.Router();

//GET

reviewsRouter.get("/", (req, res) => {
  res.json(reviews);
})

//POST

reviewsRouter.post("/", (req, res) => {
    console.log(req.body);

    if ( req.body.reviewerName && req.body.reviewText && req.body.rating)
    {
        const newReview = {
            id: reviews[reviews.length - 1].id + 1,
            bookId: reviews[reviews.length -1].bookId + 1,
           // bookId: req.body.bookId,
            reviewerName: req.body.reviewerName,
            reviewText: req.body.reviewText,
            rating: req.body.rating
        };

        //push the new author 
        reviews.push(newReview);

        res.json(reviews[reviews.length - 1]);
      
    }else
    {
        res.json({ error: "Insufficient Data" });
    }
        
})


module.exports = reviewsRouter;