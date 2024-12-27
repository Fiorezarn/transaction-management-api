const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  updateProfileImage,
} = require("@/controllers/membership.controller");
const upload = require("@/helpers/multer");
const { authenticateToken } = require("@/middleware/auth.middleware");
const {
  registerValidation,
  loginValidation,
  checkDuplicate,
} = require("@/validations/membership.validation");
const express = require("express");
const router = express.Router();

router.post("/registration", registerValidation, checkDuplicate, registerUser);
router.post("/login", loginValidation, loginUser);
router.get("/profile", authenticateToken, getProfile);
router.put("/profile/update", authenticateToken, updateProfile);
router.put("/profile/image", authenticateToken, upload, updateProfileImage);

module.exports = router;
