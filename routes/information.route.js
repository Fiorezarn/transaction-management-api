const {
  getBanner,
  getService,
} = require("@/controllers/information.controller");
const { authenticateToken } = require("@/middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.get("/banner", authenticateToken, getBanner);
router.get("/services", authenticateToken, getService);

module.exports = router;
