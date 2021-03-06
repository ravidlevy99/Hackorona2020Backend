const express = require('express');
const mongoose = require('mongoose');
const patients = require('./routes/patients.js')
const patientsdal = require('./data-access-layer/patients.js');
const announcements = require('./routes/announcements.js');

const app = express();

const PORT = 3000;

const DB_URL = 'mongodb://127.0.0.1:27017';

app.use(express.json());

app.use('/patients', patients);
app.use('/announcements', announcements);

app.listen(PORT, () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  patientsdal.insertPatients();
    console.log(`App listening on port ${PORT}!`);
  });
