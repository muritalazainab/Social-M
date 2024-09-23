const asyncHandler = require('express-async-handler');
const Campaign = require('../models/campaignerModel');
const User = require("../models/userModel")
// Create a campaign
const createCampaign = asyncHandler(async (req, res) => {
    const { title, description, budget, deadline } = req.body;



    if (!req.user || !req.user._id) {
        res.status(400);
        throw new Error('User not found');
    }

    // Check if all required fields are provided
    if (!title || !description || !budget || !deadline) {
        return res.status(400).json({ message: 'Please fill all the required fields' });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // // Check if the user has sufficient funds in their wallet
    // if (user.balance < budget) {
    //     return res.status(400).json({ message: 'Insufficient funds. Please fund your wallet before creating a campaign.' });
    // }

    // Create the campaign
    const campaign = await Campaign.create({
        title,
        description,
        budget,
        deadline,
        createdBy: req.user._id,
        status: 'open',
    });

    // Check if the campaign was successfully created
    if (!campaign) {
        return res.status(500).json({ message: 'Failed to create campaign' });
    }

    // Deduct the budget from the user's wallet balance
    user.balance -= budget;
    await user.save();

    res.status(201).json(campaign);
});



// Update a campaign's status
const updateCampaign = asyncHandler(async (req, res) => {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) {
        res.status(404).json({ message: 'Campaign not found' });
        return;
    }

    if (campaign.status !== 'open') {
        res.status(400).json({ message: 'Campaign cannot be edited after being assigned' });
        return;
    }

    campaign.title = req.body.title || campaign.title;
    campaign.description = req.body.description || campaign.description;
    campaign.budget = req.body.budget || campaign.budget;
    campaign.deadline = req.body.deadline || campaign.deadline;

    const updatedCampaign = await campaign.save();

    res.json(updatedCampaign);
});

const deleteCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
      res.status(404).json({ message: 'Campaign not found' });
      return;
  }

  if (campaign.status !== 'open') {
      res.status(400).json({ message: 'Campaign cannot be deleted after being assigned' });
      return;
  }

  await campaign.remove();
  res.json({ message: 'Campaign deleted successfully' });
});

// Get all available campaigns
const ApplyForCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

    if (!campaign || campaign.status !== 'open') {
        res.status(404).json({ message: 'Campaign not found or not open for applications' });
        return;
    }

    const alreadyApplied = campaign.applications.find(app => app.marketerId.toString() === req.user._id.toString());

    if (alreadyApplied) {
        res.status(400).json({ message: 'You have already applied for this campaign' });
        return;
    }

    console.log(req.user._id, "i am here")

    const application = {
        marketerId: req.user._id,
        portfolioLink: req.body.portfolioLink,
        coverLetter: req.body.coverLetter,
    };

    campaign.applications.push(application);
    await campaign.save();

    res.status(201).json({ message: 'Application submitted successfully' });
});

const selectMarketer = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign || campaign.status !== 'open') {
      res.status(404).json({ message: 'Campaign not found or not open for assignment' });
      return;
  }

  const selectedMarketer = campaign.applications.find(app => app.marketerId.toString() === req.body.marketerId);

  if (!selectedMarketer) {
      res.status(400).json({ message: 'Marketer not found in applications' });
      return;
  }

  campaign.assignedMarketer = req.body.marketerId;
  campaign.status = 'assigned'; // Change status to 'assigned'
  await campaign.save();

  res.json({ message: 'Marketer selected successfully' });

})

const submitWork = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign || campaign.status !== 'assigned') {
      res.status(404).json({ message: 'Campaign not found or not assigned to you' });
      return;
  }

  campaign.submittedWork = {
      marketerId: req.user.id,
      workDetails: req.body.workDetails
  };
  campaign.status = 'submitted'; // Change status to 'submitted'
  await campaign.save();

  res.json({ message: 'Work submitted successfully' });
});


module.exports = {
  createCampaign,
  updateCampaign,
  deleteCampaign,
  ApplyForCampaign,
  selectMarketer,
  submitWork
};
