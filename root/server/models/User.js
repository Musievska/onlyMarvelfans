const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 6,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        min: 10,
        max: 50
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 50
    },
    favoriteComics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comic'
    }],
    favoriteCharacters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }],
    favoriteStories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }],
    favoriteSeries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Serie'
    }],
    favoriteEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
});

module.exports = mongoose.model('User', UserSchema);