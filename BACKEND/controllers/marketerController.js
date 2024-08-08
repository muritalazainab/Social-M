const asyncHandler = require('express-async-handler');
const Marketer = require('../models/marketerModel');
const Task = require('../models/taskModel'); // Assuming you have a Task model
const Work = require('../models/workModel'); // Assuming you have a Work model

// Get all available tasks
const getAvailableTasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find({ status: 'available' });
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Apply for a task
const applyForTask = asyncHandler(async (req, res) => {
  const { taskId, applicationLetter } = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task || task.status !== 'available') {
      return res.status(404).json({ message: 'Task not found or not available' });
    }

    task.status = 'applied';
    task.application = applicationLetter;
    await task.save();

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error applying for task:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get assigned jobs
const getAssignedJobs = asyncHandler(async (req, res) => {
  try {
    const marketer = await Marketer.findById(req.user.id).populate('tasks');
    const assignedJobs = marketer.tasks.filter(task => task.status === 'assigned');
    res.status(200).json(assignedJobs);
  } catch (error) {
    console.error('Error fetching assigned jobs:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit work for a task
const submitWork = asyncHandler(async (req, res) => {
  const { taskId, workDetails } = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task || task.status !== 'assigned') {
      return res.status(404).json({ message: 'Task not found or not assigned' });
    }

    task.status = 'completed';
    task.workDetails = workDetails; // Update with work details
    await task.save();

    res.status(200).json({ message: 'Work submitted successfully' });
  } catch (error) {
    console.error('Error submitting work:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update profile to include portfolio
const updateProfile = asyncHandler(async (req, res) => {
  const { name, bio, portfolio } = req.body;
  try {
    const marketer = await Marketer.findById(req.user.id);
    if (!marketer) {
      return res.status(404).json({ message: 'Marketer not found' });
    }

    marketer.name = name;
    marketer.bio = bio;
    marketer.portfolio = portfolio; // Update with portfolio details
    await marketer.save();

    res.status(200).json({ message: 'Profile updated and portfolio created' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = {
  getAvailableTasks,
  applyForTask,
  getAssignedJobs,
  submitWork,
  updateProfile
};
