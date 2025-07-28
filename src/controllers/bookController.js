const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const createAuthor = async function (req, res) {
  let body = req.body;
  if (!body.author_id) {
    return res.send({ msg: "Author Id is required.." });
  }
  let authorData = await authorModel.create(body);
  res.send({ data: authorData });
};
const createbook = async function (req, res) {
  let body = req.body;
  if (!body.author_id) {
    return res.send({ msg: "Author Id is required..." });
  }
  let savedData = await bookModel.create(body);
  res.send({ data: savedData });
};

const getSpecificAuthorBooks = async function (req, res) {
  let books = await bookModel.find().populate("author_id");
  let specifiedBook = [];
  books.forEach((x) => {
    if (x.author_id.author_name === "Chetan Bhagat") {
      specifiedBook.push(x.bookName);
    }
  });
  res.send({ specifiedAuthorBook: specifiedBook });
};

const updateBook = async function (req, res) {
  // let author = await bookModel.find({ bookName: "Two States"}).populate('author_id');
  let updateBook = await bookModel
    .findOneAndUpdate(
      { bookName: "Two States" },
      { $set: { price: 100 } },
      { new: true }
    )
    .populate("author_id");

  let author = updateBook.author_id.author_name;

  res.send({ authorName: author, updatedPrice: updateBook.price });
};

const getBookBasedonPrice = async function (req, res) {
  let arr = [];
  // let obj = {};
  let books = await bookModel
    .find({ price: { $gte: 500, $lte: 1000 } })
    .populate("author_id")
    .select({ bookName: 1, author_id: 1, _id: 0 });
  console.log(books);

  books.forEach((x) => {
    // Object.assign(obj, {
    //   book_name: x.bookName,
    //   author: x.author_id.author_name,
    // });

    arr.push(x.bookName + " :  " + x.author_id.author_name);
  });
  res.send({ bookListWithAuthor: arr });
};

module.exports.createBook = createbook;
module.exports.createAuthor = createAuthor;
module.exports.getSpecificAuthorBook = getSpecificAuthorBooks;
module.exports.updateBooks = updateBook;
module.exports.getBookBasedonPrice = getBookBasedonPrice;
