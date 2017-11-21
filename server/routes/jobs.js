const express = require('express');
const router = express.Router();

const JobFeedLoader = require('../jobFeedLoader');
const moment = require('moment');

const Job = require('../models/job');

// /api/jobs routes

// Route for deleting Bills from the bills database
router.get('/', function(req, res) {
  Job.find({}, function (err, jobs) {
    if(err) console.log('Err: ', err);
    res.json(jobs);
  });
});

router.get('/:id', function(req, res) {
  Job.findOne({'id': req.params.id},function(err, job) {
    if(err) console.log('Err: ', err);
    return res.json(job);
  });
});

router.get('/loadJobFeed', function(req, res) {
  JobFeedLoader.loadJobFeed();
  
  res.json({success: 1});
});

module.exports = router;