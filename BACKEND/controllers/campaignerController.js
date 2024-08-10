const asyncHandler = require('express-async-handler');
const Campaign = require('../models/campaignerModel');

// Create a campaign
    const createCampaign = asyncHandler(async (req, res) => {
      const { title, description, timeframe, budget, campaigner } = req.body;
      const campaign = new Campaign({ 
        title, 
        description, 
        timeframe,
         budget, 
         status:"available",
         campaigner });
    
      try {
        const savedCampaign = await campaign.save();
        res.status(201).json({ message: 'Campaign created successfully', campaign: savedCampaign });
      } catch (error) {
        console.error('Error creating campaign', error);
        res.status(500).json({ message: 'Server error' });
      }
    });
 

// Update a campaign's status
const updateCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);

  if (!campaign) {
    return res.status(404).json({ error: "Campaign not found" });
  }

  if (campaign) {
    const { title, description, budget, timeframe} = campaign;

    // Check if the user is authenticated
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Check if the authenticated user is the campaigner
    if (campaign.campaigner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Not authorized to update this campaign" });
    }

    // Update the campaign details
    campaign.title = req.body.title || title;
    campaign.description = req.body.description || description;
    campaign.budget = req.body.budget || budget;
    campaign.timeframe = req.body.timeframe || timeframe;

    // Update status if provided
    if (req.body.status) {
      campaign.status = req.body.status;
    }

    const updatedCampaign = await campaign.save();

    res.json(updatedCampaign);
  }
});


const deleteCampaign = asyncHandler(async (req, res) => {
  const { campaignId } = req.body;

  try {
    const campaign = await Campaign.findById(campaignId);

    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }

    if (campaign.campaigner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this campaign' });
    }

    if (campaign.status === 'assigned') {
      return res.status(400).json({ message: 'Cannot delete an assigned campaign' });
    }

    await campaign.remove();

    res.status(200).json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get all available campaigns
const getAvailableCampaigns = asyncHandler(async (req, res) => {
  try {
    const campaigns = await Campaign.find({ status: 'available' });
    res.status(200).json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get campaigns by status
const getCampaignsByStatus = asyncHandler(async (req, res) => {
  const { status } = req.query;

  try {
    const campaigns = await Campaign.find({ campaigner: req.user.id, status });
    res.status(200).json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns by status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = {
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getAvailableCampaigns,
  getCampaignsByStatus
};
