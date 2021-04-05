const Book = require("../models/books");
// const { validationResult } = require("express-validator");

exports.uploadBook = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ message: errors.array() });
  // }
  console.log(req.body);
  const { name, author, coverImage, department, book } = req.body;
  let newBook = new Book({ name, author, coverImage, department, book });

  try {
    newBook = await newBook.save();
    res.status(200).json({
      status: "success",
      message: "book created successfully",
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal Server error",
      details: error.message,
    });
  }
};
