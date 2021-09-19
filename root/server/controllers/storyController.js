const User = require('../models/User');
const Story = require('../models/Story');

async function addStory(req, res) {
    try {
        const story = await Story.create(req.body);
        const user = await User.findById(req.params.userId).populate('favoriteStories').exec();
        user.favoriteStories.push(story);
        user.save();
        console.log(user);
        console.log(user.favoriteStories);
        res.status(200).json({
            data: { favoriteStories: user.favoriteStories }
        });
    } catch (err) {
        console.log(err);
    }
}

async function getListFavoriteStories(req, res) {
    try {
        const user = await User.findById(req.params.userId).populate('favoriteStories').exec();
        res.status(200).json({
            data: { favoriteStories: user.favoriteStories }
        });
    } catch (err) {
        console.log(err);
    }
}

async function removeFavoriteStories(req, res) {
    try {
        const { storyId } = req.body;
        console.log(req.user);
        const user = await User.findById(req.params.userId).populate('favoriteStories').exec();
        user.favoriteStories = user.favoriteStories.filter(favorite => favorite.story_id != storyId);
        user.save();
        res.status(200).json({
            data: { favoriteStories: user.favoriteStories }
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addStory,
    getListFavoriteStories,
    removeFavoriteStories
};