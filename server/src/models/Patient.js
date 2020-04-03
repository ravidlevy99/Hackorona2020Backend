const mongoose = require('mongoose');

const Patient = mongoose.model('Patient', {
    name: {type: String, trim: true},
    id: {type: String, trim: true},
    department: {type: String, name: true}
});

module.exports = {
    model: Patient
};