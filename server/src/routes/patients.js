var express = require('express');
var patients = require('../data-access-layer/patients.js');
var router = express.Router();

router.get('/', function (req, res) {
  patients.findPatients()
    .then(patients => res.send(patients))
    .catch(err => res.status(500).send(err));
});

router.get('/departments', function (req, res) {
    patients.patientsPerDepartment()
    .then(patients => res.send(patients))
    .catch(err => res.status(500).send(err));
})

module.exports = router
