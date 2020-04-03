const mongoose = require('mongoose');

const Message = mongoose.model('Message', {
    title: {type: String},
    body: {type: String},
    time: {stype: String},
    sender: {type: String}
});

module.exports = {
    model: Message
};