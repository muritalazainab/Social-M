const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  timeframe: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'applied', 'assigned', 'completed'],
    default: 'available',
  },
  campaigner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming User is the model for both campaigners and marketers
    required: true,
  },
  marketer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  application: { type: String } // Optional field for application letters
});

const Campaign = mongoose.models.Campaign || mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
