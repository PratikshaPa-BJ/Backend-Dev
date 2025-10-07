const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");
const bookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let data = req.body;
  let authorId = req.body.author;
  let publisherId = req.body.publisher;

  let authorFromRequest = await authorModel.findById(authorId);
  let publisherFromRequest = await publisherModel.findById(publisherId);

  if (!authorFromRequest) {
    res.send("The author Id provided is not valid.");
  } else if (!publisherFromRequest) {
    res.send("The publisher Id provided is not valid.");
  } else {
    let bookCreated = await bookModel.create(data);
    res.send({ data: bookCreated });
  }
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate("author", "author_name age").populate("publisher");
  res.send(allBooks);
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
