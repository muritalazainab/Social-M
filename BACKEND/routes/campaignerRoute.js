const express = require('express');
const { createCampaign,getAvailableCampaigns,updateCampaign,getCampaignsByStatus,deleteCampaign } = require('../controllers/campaignerController');
const { protect } = require('../controllers/middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createCampaign);
router.get('/', protect,getAvailableCampaigns);
router.put('/', protect, updateCampaign);
router.get('/', protect, getCampaignsByStatus);
router.delete('/', protect, deleteCampaign);

module.exports = router;
