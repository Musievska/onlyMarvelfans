const mongoose = require('mongoose');

const storyScheme = mongoose.Schema({
    story_id: {
        type: String
    },
    title: {
        type: String
    },
    image: {
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
    series: {
        type: []
    }
});

module.exports = mongoose.model('Story', storyScheme);