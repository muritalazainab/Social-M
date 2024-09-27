const express = require('express');
const { createCampaign,ApplyForCampaign,updateCampaign,selectMarketer,deleteCampaign,submitWork, getAllCampains } = require('../controllers/campaignerController');
const { protect } = require('../controllers/middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllCampains);
router.post('/',protect, createCampaign);
router.post('/apply/:campaignId',   ApplyForCampaign);
router.put('/:id',  updateCampaign);
router.put('/:id', selectMarketer);
router.delete('/:id',  deleteCampaign);
router.post('/',  submitWork);

module.exports = router;



