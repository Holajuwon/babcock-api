const { validationResult } = require("express-validator");
const User = require("../models/users");
const bcryptjs = require("bcryptjs");

exports.signin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() });
  }
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "fail", message: "invalid email or password" });
    }

    if (!(await bcryptjs.compare(password, user.password))) {
      return res
        .status(400)
        .json({ status: "fail", message: "invalid email or password" });
    }

    res.status(200).json({
      status: "success",
      message: "user signed in successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "internal server error",
      details: error.message,
    });
  }
};
