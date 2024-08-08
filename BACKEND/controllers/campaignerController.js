const asyncHandler = require("express-async-handler");

const Campaign = require('../models/campaignerModel');

const createCampaign = asyncHandler(async (req, res) => {
  const { title, description, timeframe, budget, campaigner } = req.body;
  const campaign = new Campaign({ title, description, timeframe, budget, campaigner });

  try {
    const savedCampaign = await campaign.save();
    res.status(201).json({ message: 'Campaign created successfully', campaign: savedCampaign });
  } catch (error) {
    console.error('Error creating campaign', error);
    res.status(500).json({ message: 'Server error' });
  }
});

const getCampaigns = asyncHandler(async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('campaigner marketer');
    res.status(200).json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = {
  createCampaign,
  getCampaigns,
};
