const asyncHandler = require("express-async-handler");
const Campaign = require('../models/campaignerModel');
const Payment = require('../models/paymentModel');

const getDashboardData = asyncHandler(async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCampaigns = await Campaign.countDocuments();
    const pendingCampaigns = await Campaign.countDocuments({ status: 'pending' });
    const completedCampaigns = await Campaign.countDocuments({ status: 'completed' });

    res.status(200).json({
      totalUsers,
      totalCampaigns,
      pendingCampaigns,
      completedCampaigns
    });
  } catch (error) {
    console.error('Error fetching dashboard data', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = {
  getDashboardData,
};
