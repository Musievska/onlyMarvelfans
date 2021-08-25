const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 6,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        min: 10
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
    favoritesComics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comic'
    }],
    favoritesCharacters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }],
    favoritesStories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }],
    favoritesSeries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Serie'
    }],
    favoritesEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
});

module.exports = mongoose.model('User', UserSchema);