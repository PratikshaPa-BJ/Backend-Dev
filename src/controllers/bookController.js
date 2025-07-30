const bookModel = require("../models/bookModel");
const mongoose = require("mongoose");

const createBook = async function (req, res) {
  let body = req.body;
  let books = await bookModel.create(body);
  res.send({ data: books });
};
// find out total sales based on author in descending order
const totalSalesPerAuthor = async function (req, res) {
  let totalSales = await bookModel.aggregate([
    { $group: { _id: "$author", totalNoOfSales: { $sum: "$sales" } } },
    { $sort: { totalNoOfSales: -1 } },
  ]);
  res.send({ res: totalSales });
};

// find out all the chetan bhagat books and count total price
const specificAuthorTotalBookPrice = async function (req, res) {
  let totalBookPrice = await bookModel.aggregate([
    { $group: { _id: "$author", totalPrice: { $sum: "$price" } } },
    { $sort: { totalPrice: 1 } },
  ]);

  res.send({ res: totalBookPrice });
};

module.exports.createBooks = createBook;
module.exports.totalSalesPerAuthor = totalSalesPerAuthor;
module.exports.specificAuthorTotalBookPrice = specificAuthorTotalBookPrice;
