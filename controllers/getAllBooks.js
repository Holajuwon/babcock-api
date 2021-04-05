const Book = require("../models/books");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (!books.length) {
      return res
        .status(400)
        .json({ status: "fail", message: "book does not exist" });
    }
    res.status(200).json({
      status: "success",
      message: "book fetched successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "internal server error",
      details: error.message,
    });
  }
};
