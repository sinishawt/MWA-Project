/**
 * authentication & athorization: login/logout and resource control
 */

const express = require('express');
const router = express.Router();
const Product = require('../models/User')
const mongoose = require('mongoose');
const authController = require('../controller/auth_controller');

//router.get('/', authController.checkLogin); //will be open later 
router.post('/login', authController.login);
//router.post('/register', authController.logout);
//router.post('/logout', authController.logout);


module.exports = router;