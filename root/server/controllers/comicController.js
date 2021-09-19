const User = require('../models/User');
const Comic = require('../models/Comic');

async function addComic(req, res) {
        try {
            const comic = await Comic.create(req.body);
           // console.log(comic);
            const user = await User.findById(req.params.userId)
                .populate('favoriteComics')
                .exec();
            user.favoriteComics.push(comic);
            user.save();
            console.log(user);
            console.log(user.favoriteComics);

            res.status(200).json({
                data: {
                    favoriteComics: user.favoriteComics
                }
            });
        } catch (err) {
            console.error(err);
        }
     }


async function getListFavoriteComics(req, res) {
    try {
        const user = await User.findById(req.params.userId)
            .populate('favoriteComics')
            .exec();
        res.status(200).json({
            data: {
                favoriteComics: user.favoriteComics
            }
        });
    } catch (err) {
        console.error(err);
    }
}

async function removeFavoriteComics(req, res) {
    try {
        const { comicId } = req.body;
        console.log(req.user);
        const user = await User.findById(req.params.userId)
            .populate('favoriteComics')
            .exec();
        user.favoriteComics = user.favoriteComics.filter(item => item.comic_id != comicId);
        user.save();
        res.status(200).json({
            data: { favoriteComics: user.favoriteComics }
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    addComic,
    getListFavoriteComics,
    removeFavoriteComics
}