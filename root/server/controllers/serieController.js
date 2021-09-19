const User = require('../models/User');
const Serie = require('../models/Serie');

async function addSeries(req, res) {
    try {
        const serie = await Serie.create(req.body);
        const user = await User.findById(req.params.userId).populate('favoriteSeries').exec();
        user.favoriteSeries.push(serie);
        user.save();
        console.log(user);
        console.log(user.favoriteSeries);
        res.status(200).json({
            data: { favoriteSeries: user.favoriteSeries }
        });
    } catch (err) {
        console.log(err);
    }
}

async function getListFavoriteSeries(req, res) {
    try {

    } catch (err) {

    }
}

module.exports = {
    addSeries,
    getListFavoriteSeries,
    removeSeries

}