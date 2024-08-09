const express = require('express');
const {
  
 
  applyForCampaign,
  getAssignedJobs,
  submitWork,
  updateProfile,
} = require('../controllers/marketerController');

const router = express.Router();


router.get('/', getAssignedJobs);
router.post('/', submitWork);
router.post('/',   applyForCampaign);
router.put('/', updateProfile);

module.exports = router;
