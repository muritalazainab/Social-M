// paymentRoutes.js

const express = require("express");
const {
  processPayment,
  processWithdrawal,
  depositFunds,
} = require("../controllers/paymentController");
const { protect } = require("../controllers/middleware/authMiddleware");
const verifyJWT = require("../controllers/middleware/verifyJWT");

const router = express.Router();

// Route to handle deposits
router.post("/deposit-funds",  depositFunds);
router.post("/deposit", protect, processPayment);

// Route to handle withdrawals
router.post("/withdraw", protect, processWithdrawal);

module.exports = router;
