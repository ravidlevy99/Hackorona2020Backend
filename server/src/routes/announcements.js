const express = require('express');
const announcements = require('../data-access-layer/announcement.js');
const router = express.Router();

router.get('/', function(req, res){
    announcements.getAnnouncements()
        .then(announcements => res.send(announcements))
        .catch(err => res.status(500).send(err));
})

router.post('/', function(req, res){
    announcements.insertAnnouncement(req.body.title, req.body.body,  req.body.time, req.body.sender)
        .then(announcement => res.status(201).send(announcement))
        .catch(err => res.status(400).send(400));
})

module.exports = router