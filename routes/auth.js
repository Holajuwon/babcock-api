const express = require("express");
const { getUser } = require("../controllers/getUser");
const { signin } = require("../controllers/signin");
const { signup } = require("../controllers/signup");
const {
  ValidateSignin,
} = require("../middlewares/requestValidator/signinValidator");
const {
  ValidateSignup,
} = require("../middlewares/requestValidator/signupValidator");
const router = express.Router();

router
  .post("/signup", [ValidateSignup], signup)
  .post("/signin", [ValidateSignin], signin);

module.exports = router;
