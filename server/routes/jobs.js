const express = require('express');
const router = express.Router();

const moment = require('moment');

const Job = require('../models/job');

const JOBS = [
    { id: 1, name: 'Web Developer' },
    { id: 2, name: 'Bus Monitor' },
    { id: 3, name: 'Speech Language Pathologist' },
    { id: 4, name: 'Developer 2' }
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

module.exports = router;