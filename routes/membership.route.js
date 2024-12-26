const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  updateProfileImage,
} = require("@/controllers/membership.controller");
const upload = require("@/helpers/multer");
const { authenticateToken } = require("@/middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.post("/registration", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticateToken, getProfile);
router.put("/profile/update", authenticateToken, updateProfile);
router.put("/profile/image", authenticateToken, upload, updateProfileImage);

module.exports = router;
