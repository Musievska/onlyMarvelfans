const mongoose = require('mongoose');

const serieSchema = mongoose.Schema({
    event_id: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    characters: {
        type: []
    },
    comics: {
        type: []
    },
    stories: {
        type: []
    }
});

module.exports = mongoose.model('Serie', serieSchema);