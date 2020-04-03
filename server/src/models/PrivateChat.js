const mongoose = require('mongoose');

const PrivateChat = mongoose.model('PrivateChat', {
    worker1: Worker1.schema,
    worker2: Worker2.schema,
    messages: [Message.schema]
});

module.exports = {
    model: PrivateChat
};