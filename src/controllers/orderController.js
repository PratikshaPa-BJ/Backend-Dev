const mongoose = require("mongoose");
const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {
  let body = req.body;
  let { productId, userId } = req.body;
  // validation
  if (!productId) {
    return res.send(" product does not exist..");
  }
  if (!mongoose.isValidObjectId(productId)) {
    return res.send("Product id is not valid object id..");
  }
  let productExist = await productModel.findOne({ _id: productId });

  if (!productExist) {
    return res.send("This product does not exist..");
  }
  //   if (
  //     !mongoose.isValidObjectId(productId) ||
  //     !(await productModel.findOne({ _id: productId }))
  //   ) {
  //     return res.send("Product id is not valid objectId or does not exist..");
  //   }
  if (!userId) {
    return res.send(" user does not exist..");
  }
  if (!mongoose.isValidObjectId(userId)) {
    return res.send("User id is not valid object id..");
  }
  let userExist = await userModel.findOne({ _id: userId });
  if (!userExist) {
    return res.send("This User does not exist..");
  }

  // freeAppUser attribute is set in MW
  let freeUser = req.freeAppUser;
  console.log(freeUser);

  if (freeUser) {
    body.amount = 0;
    body.isFreeAppUser = true;
    let order = await orderModel.create(body);
    return res.send({ msg: order });
  } else {
    body.isFreeAppUser = false;
    let userBalance = userExist.balance;
    let productPrice = productExist.price;

    if (userBalance >= productPrice) {
      req.body.amount = productPrice;
      let balanceAfterDeduction = userBalance - productPrice;
      let updatedUserBalance = await userModel.findOneAndUpdate(
        { _id: userId },
        { $set: { balance: balanceAfterDeduction } },
        { new: true }
      );
      const createOrder = await orderModel.create(body);
      return res.send({
        data: createOrder,
        updatedUserInfo: updatedUserBalance,
      });
    } else {
      res.send({ msg: "User balance is not sufficient to place order.." });
    }
  }
};

module.exports.createOrders = createOrder;
