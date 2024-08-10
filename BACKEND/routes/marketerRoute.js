const express = require('express');
const {
  
 
  applyForCampaign,
  getAssignedCampaigns,
  submitWork,
  updateProfile,
} = require('../controllers/marketerController');

const router = express.Router();


router.get('/', getAssignedCampaigns);
router.post('/', submitWork);
router.post('/',   applyForCampaign);
router.put('/', updateProfile);

module.exports = router;
