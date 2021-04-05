const express = require("express");
const { getAllBooks } = require("../controllers/getAllBooks");
const { getBook } = require("../controllers/getBook");
const { updateBookDetails } = require("../controllers/updateBookDetails");
const { uploadBook } = require("../controllers/uploadBook");
const router = express.Router();

router
  .post("/", uploadBook)
  .get("/", getAllBooks)
  .get("/:id", getBook)
  .put("/:id", updateBookDetails);

module.exports = router;
