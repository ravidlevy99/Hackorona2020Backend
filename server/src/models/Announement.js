const mongoose = require('mongoose');

const Announcement = mongoose.model('Announcement', {
    title: {type: String},
    body: {type: String},
    time: {type: String},
    sender: {type: String}
});

module.exports = {
    model: Announcement
};