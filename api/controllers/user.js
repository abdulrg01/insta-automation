const User = require("../models/user");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req, res) => {
  // Get all users from MongoDB
  const users = await User.find().select("-password").lean();

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
};

// @desc Get user info
// @route GET /users/auth
// @access Private
const getUserInfo = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password").exec();

  if (!user) return res.status(400).json({ message: "No User found" });

  res.json(user);
};

module.exports = {
  getAllUsers,
  getUserInfo,
};
