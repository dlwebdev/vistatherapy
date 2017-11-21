const express = require('express');
const router = express.Router();

const JobFeedLoader = require('../jobFeedLoader');
const moment = require('moment');

const Job = require('../models/job');

const JOBS = [
    { id: 1, profession: 'Developer', title: 'Web Developer', location: 'Charlotte, NC', description: 'Web Developer position in Charlotte, NC. Must know Angular and DB Management.' },
    { id: 2, profession: 'Bus Monitor', title: 'Bus Monitor', location: 'Gastonia, NC', description: 'Bus Monitor for Gaston County School system.' },
    { id: 3, profession: 'Speech Language Pathologist', title: 'Speech Language Pathologist', location: 'Atlanta, GA', description: 'SLP position in Atlanta, GA. Must have 5 years of experience.' },
    { id: 4, profession: 'Developer', title: 'PHP Developer 2', location: 'Columbia, SC', description: 'PHP Developer needed in Columbia, SC. Old language, but still needed.' }
];

// /api/jobs routes

// Route for deleting Bills from the bills database
router.get('/', function(req, res) {
/*    
  Job.find({}, function (err, jobs) {
    if(err) console.log('Err: ', err);
    res.json(jobs);
  });
  */

  res.json(JOBS);
});

router.get('/loadJobFeed', function(req, res) {
  JobFeedLoader.loadJobFeed();
  
  res.json({success: 1});
});

module.exports = router;