const express = require("express");
const auth = require("../routes/auth");
const books = require("../routes/books");
const user = require("../routes/user");
const cors = require("cors");

module.exports = (app) => {
  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user", user);
  app.use("/api/v1/book", books);
  app.use(cors());
};
