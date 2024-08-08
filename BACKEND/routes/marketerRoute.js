const express = require('express');
const {
  getAssignedJobs,
  getAvailableTasks,
  applyForTask,
  submitWork,
  updateProfile,
} = require('../controllers/marketerController');

const router = express.Router();

router.get('/assign', getAssignedJobs);
router.get('/', getAvailableTasks);
router.post('/', submitWork);
router.post('/', applyForTask);
router.put('/', updateProfile);

module.exports = router;
