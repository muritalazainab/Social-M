// models/Portfolio.js
const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  skill: {
    type: [String], // Array of strings for multiple skills
    required: true,
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Freelance'],
    required: true,
  },
  linkedinProfile: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
