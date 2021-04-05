const { body } = require("express-validator");

exports.ValidateSignin = [
  body("email")
    .trim(" ")
    .toLowerCase()
    .notEmpty()
    .withMessage("please input your email")
    .isEmail()
    .withMessage("please input correct email address format")
    .normalizeEmail({ all_lowercase: true }),
  body("password")
    .trim(" ")
    .notEmpty()
    .withMessage("Input a user password")
    .isLength({ min: 5 })
    .withMessage("password must be a minimum of 5 characters")
    .escape(),
];
