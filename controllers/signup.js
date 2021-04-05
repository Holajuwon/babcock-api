const User = require("../models/users");
const { validationResult } = require("express-validator");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() });
  }

  const { email, password, firstName, lastName } = req.body;

  let user = new User({ email, password, firstName, lastName });

  try {
    await user.save();
    res.status(200).json({
      status: "success",
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal Server error",
      details: error.message,
    });
  }
};
