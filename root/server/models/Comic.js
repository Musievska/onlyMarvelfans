const mongoose = require('mongoose');

const comicSheme = mongoose.Schema({
    id: {
        int
    },
    title: {
        String
    },
    description: {
        String
    }
    

})