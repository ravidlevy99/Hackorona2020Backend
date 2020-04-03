const express = require('express');
const mongoose = require('mongoose');
const patients = require('./routes/patients.js')

const app = express();

const PORT = 3000;

const DB_URL = 'mongodb://127.0.0.1:27017';

app.use(express.json());

app.use('/patients', patients);

app.listen(PORT, () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
    console.log(`App listening on port ${PORT}!`);
  });
