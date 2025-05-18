const User = require("../models/user");
const {
  generateAccessToken,
  generateRefreshToken,
  loginUserService,
  createNewUserService,
} = require("../service/auth.service");
const {
  getUserInfoService,
  getAllUsersService,
  postsService,
} = require("../service/user.service");
const refreshUserInstagramToken = require("../utils/refreshExpiringInstagramTokens");

const getAllUsers = async (req, res) => {
  const users = await getAllUsersService();
  res.json(users);
};

const getUserInfo = async (req, res) => {
  const id = req.user;

  try {
    const user = await getUserInfoService(id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await createNewUserService({ name, email, password });
    const token = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    const createdUser = await User.findById(user._id).select("-password");
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      success: true,
      user: createdUser,
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const userPost = async (req, res) => {
  const id = req.user;
  try {
    const posts = await postsService(id);
    res.status(200).json({ status: 200, posts });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await loginUserService(email, password);
    const token = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    const userInfo = await User.findById(user._id).select("-password");
    res.status(200).json({
      success: true,
      user: userInfo,
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const refresh = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const user = await User.findOne({ name: decoded.name }).exec();
      if (!user) return res.status(401).json({ message: "Unauthorized" });

      const token = generateAccessToken(user);
      res.json({ success: true, user, token });
    }
  );
};

const logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};

const refreshInstagramTokensController = async (req, res) => {
  const userId = req.user;
  const result = await refreshUserInstagramToken(userId);

  if (!result.success) {
    return res.status(400).json(result);
  }
  res.status(200).json(result);
};

module.exports = {
  getAllUsers,
  getUserInfo,
  createNewUser,
  loginUser,
  refresh,
  logout,
  userPost,
  refreshInstagramTokensController,
};
