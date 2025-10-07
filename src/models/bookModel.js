const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: String,
    author: { type: ObjectId, ref: "myAuthorOther" },
    price: Number,
    ratings: Number,
    publisher: { type: ObjectId, ref: "publisherCache" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("myBookCache", bookSchema);
