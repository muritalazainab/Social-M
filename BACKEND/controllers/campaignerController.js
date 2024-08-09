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
  const { campaignId, title, description, budget, timeline, status } = req.body;

  try {
    const campaign = await Campaign.findById(campaignId);

    if (!campaign) {
    return res.status(404).json({ message: 'Campaign not found' });
    }

    if (campaign.campaigner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this campaign' });
    }

    // Update the campaign details
    campaign.title = title || campaign.title;
    campaign.description = description || campaign.description;
    campaign.budget = budget || campaign.budget;
    campaign.timeline = timeline || campaign.timeline;

    // Update status if provided
    if (status) {
      campaign.status = status;
    }

    await campaign.save();

    res.status(200).json({ message: 'Campaign updated successfully', campaign });
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(500).json({ message: 'Server error' });
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
