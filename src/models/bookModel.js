const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "author2",
    },
    price: Number,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("book1", bookSchema);
