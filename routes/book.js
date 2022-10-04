let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our Book Model
let Book = require("../models/books");

/* GET Route for the Book List page - READ OPeration */
router.get("/", (req, res, next) => {
  Book.find((err, bookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(bookList);

      res.render("book", { title: "Book List", BookList: bookList });
      //render book.ejs and pass title and Booklist variable we are passing bookList object to BookList property
    }
  });
});

module.exports = router;
