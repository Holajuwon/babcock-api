const User = require("../models/users");

exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(400)
        .json({ status: "fail", message: "user does not exist" });
    }

    res.status(200).json({
      status: "success",
      message: "user fetched successfully",
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
