const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  coverImage: {
    data: Buffer,
    contentType: String,
  },
  department: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1024,
  },
  book: {
    data: Buffer,
    contentType: String,
  },
  author: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
