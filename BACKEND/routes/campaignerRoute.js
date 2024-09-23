const express = require('express');
const { createCampaign,ApplyForCampaign,updateCampaign,selectMarketer,deleteCampaign,submitWork } = require('../controllers/campaignerController');
const { protect } = require('../controllers/middleware/authMiddleware');

const router = express.Router();

router.post('/',protect, createCampaign);
router.post('/:id',   ApplyForCampaign);
router.put('/:id',  updateCampaign);
router.put('/:id', selectMarketer);
router.delete('/:id',  deleteCampaign);
router.post('/',  submitWork);

module.exports = router;



