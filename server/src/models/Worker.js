const mongoose = require('mongoose');

const Worker = mongoose.model('Worker', {
    name: {type: String, trim: true},
    password: {type: String},
    id: {type: String, trim: true},
    role: role.schema,
    department: {type: String}
});

module.exports = {
    model: Worker
};