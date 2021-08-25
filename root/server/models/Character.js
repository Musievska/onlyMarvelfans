const mongoose = require('mongoose');

const characterScheme = mongoose.Schema({
    character_id: {
        type: Number
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Character', characterScheme);