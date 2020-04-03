const mongoose = require('mongoose');

const Hospitalization = mongoose.model('Hospitalization', {
    patient: patient.schema,
    department: {type: String},
    from: {type: String, trim: true},
    to: {type: String, trim: true},
    workersInCharge: [Worker.schema]
});

module.exports = {
    model: Hospitalization
};