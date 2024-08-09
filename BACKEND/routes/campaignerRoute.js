const express = require('express');
const { createCampaign,getAvailableCampaigns,updateCampaign,getCampaignsByStatus,deleteCampaign } = require('../controllers/campaignerController');

const router = express.Router();

router.post('/', createCampaign);
router.get('/', getAvailableCampaigns);
router.put('/', updateCampaign);
router.get('/', getAvailableCampaigns);
router.get('/', getCampaignsByStatus);
router.delete('/', deleteCampaign);

module.exports = router;
s