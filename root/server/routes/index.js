const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoute');
const userFavorites = require('./userFavorites');


router.use('/', authRoutes);
router.use('/user', userFavorites);

module.exports = router;