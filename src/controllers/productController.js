const productModel = require("../models/productModel");

const createProduct = async function (req, res) {
  let { name, category, price } = req.body;
  if (!name || !category || !price) {
    return res.send("Please provide product name, category and price..");
  }
  let products = await productModel.create(req.body);
  res.send({ data: products });
};

const getAllProducts = async function (req, res) {
  let allProduct = await productModel.find();
  res.send({ data: allProduct });
};

module.exports.createProducts = createProduct;
module.exports.getAllProduct = getAllProducts;
