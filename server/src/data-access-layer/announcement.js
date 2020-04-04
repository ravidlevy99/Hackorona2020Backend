const Announcement = require('../models/Announement.js').model;

async function insertAnnouncement(title, body, time, sender){
    const announcement = new Announcement({
        title: title,
        body: body,
        time: time,
        sender: sender
    });
    return await Announcement.create(announcement);
}

async function getAnnouncements(){
    const announcements = await Announcement.find();
    return announcements;
}

module.exports = {
    insertAnnouncement,
    getAnnouncements
}