const {
  registerUser,
  loginUser,
  getProfile,
} = require("@/controllers/auth.controller");
const { authenticateToken } = require("@/middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.post("/registration", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticateToken, getProfile);

module.exports = router;
