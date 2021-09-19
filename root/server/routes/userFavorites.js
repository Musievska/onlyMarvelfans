const express = require('express');
const comicController = require('../controllers/comicController');
const characterController = require('../controllers/characterController');
const serieController = require('../controllers/serieController');
const storyController = require('../controllers/storyController');
const router = express.Router();
const passport = require('passport');
