const mongoose = require('mongoose');

const eventScheme = mongoose.Schema({
    event_id: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    commics: {
        type: []
    },
    stories: {
        type: []
    },
    series: {
        type: []
    },
    characters: {
        type: []
    }
});

module.exports = mongoose.model('Event', eventScheme);