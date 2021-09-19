const User = require('../models/User');
const Character = require('../models/Character');


async function addCharacter(req, res) {
    try {
        const characterAdded = await Character.findOne({ character_id: req.body.character_id });
        const user = await User.findById(req.params.userId).populate('favoriteCharacters').exec();
        if (characterAdded) {
            user.favoriteCharacters.push(characterAdded);
        } else {
            const character = await Character.create(req.body);
            user.favoriteCharacters.push(character);
        }
        user.save();
        console.log(user);
        console.log(user.favoriteCharacters);
        res.status(200).json({
            data: { favoriteCharacters: user.favoriteCharacters }
        });
    } catch (err) {
        console.log(err);
    }
}

    async function removeFavoriteCharacters(req, res) {
        console.log(req.body);
        try {
            const { characterId } = req.body;
            console.log(req.user);
            const user = await User.findById(req.params.userId)
                .populate('favoriteCharacters')
                .exec();
            user.favoriteCharacters = user.favoriteCharacters.filter(item => item.character_id != characterId);
            console.log(user);
            console.log(user.favoriteCharacters);
            user.save();
            res.status(200).json({
                data: { favoriteCharacters: user.favoriteCharacters }
            })

        } catch (err) {
            console.log(err);
        }
    }


    async function getListFavoriteCharacters(req, res) {
        try {
            const user = await User.findById(req.params.userId).populate('favoriteCharacters').exec();
            res.status(200).json({
                data: { favoriteCharacters: user.favoriteCharacters }
            });
        } catch (error) {
            console.log(error);
        }
    }

module.exports = {
    addCharacter,
    removeFavoriteCharacters,
    getListFavoriteCharacters
    }