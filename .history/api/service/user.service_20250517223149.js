const User = require("../models/user");

const getUserInfoService = async (id) => {
  const user = await User.findById(id).select("-password");

  if (!user) {
    throw new Error("No User found");
  }

  return user;
};

const getAllUsersService = async () => {
  const users = await User.find().select("-password");
  if (!users) {
    throw new Error("No Users found");
  }
  return users;
};

const updateUserService = async (id, userData) => {
  const { name, email, password } = userData;
  const user = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      password,
    },
    { new: true }
  );
  if (!user) {
    throw new Error("User not updated");
  }

  return user;
};

const postsService = async (id) => {
  try {
    const user = await User.findById(id)
      .populate("integrations")
      .select("token");
    if (!user) throw new Error("User not found");

    const res = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${user.integrations[0].token}`
    );
    const posts = await res.json();
    if (posts) return posts;
    return new Error("Error in getting posts");
  } catch (error) {
    console.log("Error in getting posts: ", error);
    throw error;
  }
};

const deleteUserService = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new Error("User not deleted");
  }

  return user;
};

module.exports = {
  getUserInfoService,
  getAllUsersService,
  updateUserService,
  postsService,
  deleteUserService,
};
