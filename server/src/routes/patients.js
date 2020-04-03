const express = require('express');
const patients = require('../data-access-layer/patients.js');
const router = express.Router();

router.get('/', function (req, res) {
  patients.findPatients()
    .then(patients => res.send(patients))
    .catch(err => res.status(500).send(err));
});

router.post('/', function(req, res) {
  patients.insertPatient(req.body.name, req.body.id, req.body.department)
    .then(patient => res.status(201).send(patient))
    .catch(err => res.status(400).send(err));
})

router.get('/departments', function (req, res) {
    patients.patientsPerDepartment()
    .then(patients => res.send(patients))
    .catch(err => res.status(500).send(err));
})

module.exports = router
