const {
  getBalance,
  topupBalance,
  transaction,
  getTransactionHistory,
} = require("@/controllers/transaction.controller");
const { authenticateToken } = require("@/middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.get("/balance", authenticateToken, getBalance);
router.post("/topup", authenticateToken, topupBalance);
router.post("/transaction", authenticateToken, transaction);
router.get("/transaction/history", authenticateToken, getTransactionHistory);

module.exports = router;
