const asyncHandler = require("express-async-handler");
const Campaign = require("../models/campaignerModel");
const User = require("../models/userModel");
// Create a campaign
const createCampaign = asyncHandler(async (req, res) => {
  const { title, description, budget, deadline } = req.body;

  if (!req.user || !req.user._id) {
    res.status(400);
    throw new Error("User not found");
  }

  // Check if all required fields are provided
  if (!title || !description || !budget || !deadline) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  //   console.log(user)

  // Check if the user has sufficient funds in their wallet
  if (user.balance < budget) {
    return res
      .status(400)
      .json({
        message:
          "Insufficient funds. Please fund your wallet before creating a campaign.",
      });
  }

  // Deduct the section price from the user's balance and hold it in escrow
  console.log("pass require calculation");
  user.balance -= budget;

  // Update the user's balance and hold the escrow amount
  user.escrowBalance = (user.escrowBalance || 0) + budget;
  console.log(user.balance);
  console.log(user.escrowBalance);

  await user.save();

  // Create the campaign
  const campaign = await Campaign.create({
    title,
    description,
    budget,
    deadline,
    createdBy: req.user._id,
    status: "open",
  });

  console.log(campaign);
  // Check if the campaign was successfully created
  if (!campaign) {
    return res.status(500).json({ message: "Failed to create campaign" });
  }

  res.status(201).json(campaign);
});

// Update a campaign's status
const updateCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    res.status(404).json({ message: "Campaign not found" });
    return;
  }

  if (campaign.status !== "open") {
    res
      .status(400)
      .json({ message: "Campaign cannot be edited after being assigned" });
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
  const campaign = await Campaign.findById(req?.params?.id);

  if (!campaign) {
    res.status(404).json({ message: "Campaign not found" });
    return;
  }

  if (campaign.status !== "open") {
    res
      .status(400)
      .json({ message: "Campaign cannot be deleted after being assigned" });
    return;
  }
  //   console.log(campaign)

  await campaign?.remove();
  res.json({ message: "Campaign deleted successfully" });
});

const getAllCampains = asyncHandler(async (req, res) => {
  const campaign = await Campaign.find();

  if (!campaign) {
    res.status(404).json({ message: "Campaign not found" });
    return;
  }

  return res.status(200).json(campaign);
});

// Get all available campaigns
const ApplyForCampaign = asyncHandler(async (req, res) => {
  const { campaignId } = req.params;
  
  try {
    const campaign = await Campaign.findById(campaignId);

    // Check if campaign exists
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }

    // Check if the campaign is open for applications (if you have such a field)
    if (!campaign.isOpenForApplications) {
      return res.status(400).json({ message: 'Campaign not open for applications' });
    }

    // Handle application logic
    const { name, portfolioLink, coverLetter } = req.body;
    const application = { name, portfolioLink, coverLetter };

    campaign.applications.push(application); // Add the application to the campaign

    await campaign.save(); // Save the updated campaign with the new application

    return res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
})
const selectMarketer = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign || campaign.status !== "open") {
    res
      .status(404)
      .json({ message: "Campaign not found or not open for assignment" });
    return;
  }

  const selectedMarketer = campaign.applications.find(
    (app) => app.marketerId.toString() === req.body.marketerId
  );

  if (!selectedMarketer) {
    res.status(400).json({ message: "Marketer not found in applications" });
    return;
  }

  campaign.assignedMarketer = req.body.marketerId;
  campaign.status = "assigned"; // Change status to 'assigned'
  await campaign.save();

  res.json({ message: "Marketer selected successfully" });
});

const submitWork = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign || campaign.status !== "assigned") {
    res
      .status(404)
      .json({ message: "Campaign not found or not assigned to you" });
    return;
  }

  campaign.submittedWork = {
    marketerId: req.user.id,
    workDetails: req.body.workDetails,
  };
  campaign.status = "submitted"; // Change status to 'submitted'
  await campaign.save();

  res.json({ message: "Work submitted successfully" });
});

module.exports = {
  createCampaign,
  updateCampaign,
  deleteCampaign,
  ApplyForCampaign,
  selectMarketer,
  submitWork,
  getAllCampains,
};
