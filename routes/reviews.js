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


//PATCH

reviewsRouter.patch("/:id", (req, res, next) => {
    console.log(req.body);
   const review = reviews.find((review, i) => {
    if (review.id === Number(req.params.id)) {
        for (const key in req.body)
        {
            reviews[i][key] = req.body[key];
        }
        return true;
    }
   })

 if(review)  res.json(review);

 else next(); 
})

//DELETE
reviewsRouter.delete("/:id", (req, res, next) => {

    const review = reviews.find((review, i) => {
      console.log(review);
         if(review.id === Number( req.params.id))
         {
             reviews.splice(i,1);
             return true;
         }
         
      })
      if (review) res.json(review);
      else next();
 })

module.exports = reviewsRouter;