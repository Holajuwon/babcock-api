const Book = require("../models/books");

exports.getBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res
        .status(400)
        .json({ status: "fail", message: "book does not exist" });
    }
    res.status(200).json({
      status: "success",
      message: "book fetched successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "internal server error",
      details: error.message,
    });
  }
};
