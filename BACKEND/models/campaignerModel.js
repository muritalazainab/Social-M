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
  timeframe: {
    type: Date,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'completed'],
    default: 'pending',
  },
  campaigner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  marketer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
