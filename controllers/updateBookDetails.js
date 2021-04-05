const Book = require("../models/books");

exports.updateBookDetails = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const book = await Book.findByIdAndUpdate(id, { ...data });

    if (!book) {
      return res
        .status(400)
        .json({ status: "fail", message: "book does not exist" });
    }
    res.status(200).json({
      status: "success",
      message: "book updated successfully",
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
