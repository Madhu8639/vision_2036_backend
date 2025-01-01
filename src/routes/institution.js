const express = require('express');
const router = express.Router();
const institutionController = require('../controllers/institutionController');

router.post('/', institutionController.createInstitution);
router.get('/', institutionController.getAllInstitutions);
router.get('/mail/:mail', institutionController.getInstitutionByMail);

module.exports = router;