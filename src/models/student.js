const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  sportsCategory: {
    type: String,
    required: true
  },
  institutionName: {
    type: String
  },
  coachName: {
    type: String
  },
  academyName: {
    type: String
  },
  competitionLevel: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);