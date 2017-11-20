// load mongoose since we need it to define a model

// Job model is an object that tells mongodb how to store job data

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Job model
const jobSchema = new Schema({
  id: String,
  name: String
});

module.exports = mongoose.model('Job', jobSchema);