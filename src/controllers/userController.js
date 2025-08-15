const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let body = req.body;

  let { name, address } = req.body;
  if (!name || !address) {
    return res.send({
      status: false,
      msg: "Please provide user name and address..",
    });
  }
  body.isFreeAppUser = req.freeAppUser;
  console.log(body.isFreeAppUser);

  let allUser = await userModel.create(body);
  res.send({ data: allUser });
};

const getAllUsers = async function (req, res) {
  let users = await userModel.find();
  res.send({ data: users });
};

module.exports.createUsers = createUser;
module.exports.getAllUser = getAllUsers;
