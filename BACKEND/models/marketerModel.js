const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  deadline: { type: Date, required: true },
  status: { type: String, enum: ['available', 'applied', 'assigned', 'completed'], default: 'available' },
  application: { type: String } // Application letter for the task
});

// Define the Marketer schema
const marketerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  bio: { type: String }, // Express themselves
  tasks: [taskSchema], // List of tasks available, applied, and assigned
  submittedWork: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Work' 
  }], 
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

// Create the Marketer model
const Marketer = mongoose.model('Marketer', marketerSchema);

module.exports = Marketer;
