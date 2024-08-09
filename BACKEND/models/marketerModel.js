const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
  details: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const marketerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  bio: { type: String }, // Express themselves
  campaigns: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Campaign' 
  }], // List of campaigns applied to or assigned
  submittedWork: [workSchema], // Embedded work details
  portfolio: { 
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    education: { type: String },
    certifications: { type: String },
    references: { type: String },
    testimonials: { type: String }
  } // Portfolio details
});

const Marketer = mongoose.models.Marketer || mongoose.model('Marketer', marketerSchema);

module.exports = Marketer;
