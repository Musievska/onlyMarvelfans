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
        const user = await User.findById(req.params.userId).populate('favoriteSeries').exec();
        res.status(200).json({
            data: { fsvoriteSeries: user.favoriteSeries }
        });
    } catch (err) {
        console.log(err);
    }
}

async function removeFavoriteSeries(req, res) {
    try {
        const { serieId } = req.body;
        console.log(req.user);
        const user = await User.findById(req.params.userId).populate('favoriteSeries').exec();
        user.favoriteSeries = user.favoriteSeries.filter(series => series.series_id != serieId);
        user.save();
        res.status(200).json({
            data: { favoriteSeries: user.favoriteSeries }
        });
    } catch (err) {
        console.log(err);
}
}

module.exports = {
    addSeries,
    getListFavoriteSeries,
    removeFavoriteSeries

}