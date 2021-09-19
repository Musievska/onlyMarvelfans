const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.userRegister);
router.post('/login', authController.userLogin);
//router.post('/logout', authController.userLogout);

module.exports = router;
