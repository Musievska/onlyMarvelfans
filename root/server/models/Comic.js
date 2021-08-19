const mongoose = require('mongoose');

const comicSheme = mongoose.Schema({
    id: {
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

export default comicSheme;