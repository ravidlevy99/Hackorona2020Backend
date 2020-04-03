const mongoose = require('mongoose');

const PublicChat = mongoose.model('PublicChat', {
    name: {type: String},
    workers: [Worker.schema],
    messages: [Message.schema]
});

module.exports = {
    model: PublicChat
};