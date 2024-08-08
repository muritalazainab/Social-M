const express = require('express');
const { createCampaign, getCampaigns } = require('../controllers/campaignerController');

const router = express.Router();

router.post('/', createCampaign);
router.get('/', getCampaigns);

module.exports = router;
