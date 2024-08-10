const asyncHandler = require('express-async-handler');
const  Marketer = require('../models/marketerModel');
const  Campaign = require('../models/campaignerModel');

// Apply for a campaign
const applyForCampaign = asyncHandler(async (req, res) => {
  const { campaignId, applicationLetter } = req.body;
  try {
    const campaign = await Campaign.findById(campaignId);
    if (!campaign || campaign.status !== 'available') {
      return res.status(404).json({ message: 'Campaign not found or not available' });
    }

    campaign.status = 'applied';
    campaign.application = applicationLetter;
    await campaign.save();

    // Add campaign to marketer's list
    const marketer = await Marketer.findById(req.user.id);
    if (!marketer) {
      return res.status(404).json({ message: 'Marketer not found' });
    }
    if (!marketer.campaigns.includes(campaignId)) {
      marketer.campaigns.push(campaignId);
      await marketer.save();
    }

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error applying for campaign:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get assigned jobs for a marketer

const getAssignedCampaigns = asyncHandler(async (req, res) => {
  const campaigns = await Campaign.find({ marketer: req.user.id, status: 'in-progress' });

  if (!campaigns) {
      return res.status(404).json({ message: 'No assigned campaigns found' });
  }

  res.status(200).json(campaigns);
});


// Submit work for a campaign
const submitWork = asyncHandler(async (req, res) => {
  const { campaignId, workDetails } = req.body;
  try {
    const campaign = await Campaign.findById(campaignId);
    if (!campaign || campaign.status !== 'assigned') {
      return res.status(404).json({ message: 'Campaign not found or not assigned' });
    }

    // Save the work details directly into the marketer's document
    const marketer = await Marketer.findById(req.user.id);
    if (!marketer) {
      return res.status(404).json({ message: 'Marketer not found' });
    }
    
    marketer.submittedWork.push({ campaignId, details: workDetails });
    await marketer.save();

    // Update campaign status to completed
    campaign.status = 'completed';
    await campaign.save();

    res.status(200).json({ message: 'Work submitted successfully' });
  } catch (error) {
    console.error('Error submitting work:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update marketer profile and portfolio
const updateProfile = asyncHandler(async (req, res) => {
  const { name, bio, portfolio } = req.body;
  try {
    const marketer = await Marketer.findById(req.user.id);
    if (!marketer) {
      return res.status(404).json({ message: 'Marketer not found' });
    }

    marketer.name = name;
    marketer.bio = bio;
    marketer.portfolio = portfolio;
    await marketer.save();

    res.status(200).json({ message: 'Profile updated and portfolio created' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = {
  applyForCampaign,
  getAssignedCampaigns,
  submitWork,
  updateProfile
};
