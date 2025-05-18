const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJwt");
const automation = require("../controllers/automation.controller");

router
  .route("/")
  .get(verifyJWT, automation.getUserAutomations)
  .post(verifyJWT, automation.createAutomation)
  .patch(verifyJWT, automation.updateAutomation);

router.get("/:id/get-automation-info", verifyJWT, automation.getAutomationInfo);
router.post("/:id/add-listener", verifyJWT, automation.addListener);
router.post("/save-posts", verifyJWT, automation.savePosts);
router.patch("/:id/add-trigger", verifyJWT, automation.addTrigger);
router.patch("/:id/add-keyword", verifyJWT, automation.addKeyword);

module.exports = router;
