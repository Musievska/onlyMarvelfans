const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signUp', authController.userRegister);
router.post('/logIn', authController.userLogin);
router.post('/logOut', authController.userLogout);

module.exports = router;
