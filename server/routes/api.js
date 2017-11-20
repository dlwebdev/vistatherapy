const express = require('express');
const router = express.Router();

const jobs = require('./jobs');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.use('/jobs', jobs);

module.exports = router;