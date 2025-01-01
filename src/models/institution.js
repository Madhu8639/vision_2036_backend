const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  sport: {
    type: String,
    required: true
  },
  areaInSqMeters: {
    type: Number,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  coachName: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Institution', institutionSchema);