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
  deadline: {
    type: Date,
    required: true,
  },
  walletBalance: {
     type: Number,
      default: 0 }, 
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaigner',
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'assigned', 'submitted', 'completed'],
    default: 'open',
  },
  applications: [{
    marketerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Marketer',
      required: true,
    },
    portfolioLink: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
  }],
  assignedMarketer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Marketer',
  },
  submittedWork: {
    marketerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Marketer',
    },
    workDetails: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Campaign', campaignSchema);
