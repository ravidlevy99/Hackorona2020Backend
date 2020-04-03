const mongoose = require('mongoose');

const Department = mongoose.model('Department', {
    name: {type: String, trim: true},
    id: {type: String, trim: true},
    workers: [Worker.schema]
});

module.exports = {
    model: Department
};