const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: Number,
    ratings: Number,
    sales: Number,
    noOfPages: Number,
    isHardCover: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookAgg", bookSchema);
