// paymentRoutes.js

const express = require('express');
const { processPayment, processWithdrawal } = require('../controllers/paymentController');
const { protect } = require('../controllers/middleware/authMiddleware'); 

const router = express.Router();

// Route to handle deposits
router.post('/deposit',protect, processPayment);

// Route to handle withdrawals
router.post('/withdraw', protect, processWithdrawal);

module.exports = router;
