// Dependancies
const router = require('express').Router();
const Workout = require("../models/workout.js");

// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

// route to homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// route to stats page
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// route to exercise page
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// Export router for server to use
module.exports = router;