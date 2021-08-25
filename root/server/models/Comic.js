const mongoose = require('mongoose');

const comicScheme = mongoose.Schema({
    comic_id: {
        Number
    },
    title: {
        String
    },
    description: {
        String
    },
    images: {
        String
    },

});

module.exports = mongoose.model('Comic', comicScheme);