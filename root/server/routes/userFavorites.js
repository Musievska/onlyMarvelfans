const express = require('express');
const comicController = require('../controllers/comicController');
const characterController = require('../controllers/characterController');
const serieController = require('../controllers/serieController');
const storyController = require('../controllers/storyController');
const router = express.Router();
const passport = require('passport');

//added favorite heroe, delete from favorites heroes, get all favorites
router.post('/:userId/characters/favorite/add',
    passport.authenticate('jwt', { session: false }),
    characterController.addCharacter);

router.post('/:userId/characters/favorite/delete',
    passport.authenticate('jwt', { session: false }),
    characterController.removeFavoriteCharacters);

router.get('/:userId/characters/allfavorites',
    passport.authenticate('jwt', { session: false }),
    characterController.getListFavoriteCharacters);

router.post('/:userId/comics/favorite/add',
    passport.authenticate('jwt', { session: false }),
    comicController.addComic);

router.post('/:userId/comics/favorite/delete',
    passport.authenticate('jwt', { session: false }),
    comicController.removeFavoriteComics);

router.get('/:userId/comics/allfavorites',
    passport.authenticate('jwt', { session: false }),
    comicController.getListFavoriteComics);

router.post('/:userId/series/add',
    passport.authenticate('jwt', { session: false }),
    serieController.addSeries);

router.post('/:userId/series/delete',
    passport.authenticate('jwt', { session: false }),
        serieController.removeFavoriteSeries);
    
router.get('/:userId/series/allfavorites',
    passport.authenticate('jwt', { session: false }),
    serieController.getListFavoriteSeries);

router.post('/:userId/story/add',
    passport.authenticate('jwt', { session: false }),
    storyController.addStory);

router.post('/:userId/stories/delete',
    passport.authenticate('jwt', { session: false }),
    storyController.removeFavoriteStories);

router.get('/:userId/stories/allfavorites',
    passport.authenticate('jwt', { session: false }),
        storyController.removeFavoriteStories);

    




module.exports = router;
