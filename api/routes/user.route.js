const express = require("express");
const router = express.Router();
const loginLimiter = require("../middleware/loginLimiter");
const verifyJWT = require("../middleware/verifyJwt");
const users = require("../controllers/user.controller");

router.route("/").get(verifyJWT, users.getUserInfo);
router.route("/register").post(users.createNewUser);
router.route("/login").post(loginLimiter, users.loginUser);
router.route("/get-posts").get(loginLimiter, users.userPost);
router.route("/refresh").get(users.refresh);
router.route("/logout").post(verifyJWT, users.logout);
router.get('/refresh-instagram', users.refreshInstagramTokensController);

module.exports = router;
