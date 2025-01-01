const Institution = require('../models/institution');

exports.createInstitution = async (req, res) => {
  try {
    const institution = new Institution(req.body);
    const savedInstitution = await institution.save();
    res.status(201).json(savedInstitution);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find();
    res.json(institutions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInstitutionByMail = async (req, res) => {
  try {
    const institution = await Institution.findOne({ mail: req.params.mail });
    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }
    res.json(institution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};