const product = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/config');


exports.signin = function(req, res, next) {

    //const token = req.header("token");
    //if (!token) return res.status(401).json({ message: "Auth Error" });

    //res.status(200).send({ message: "signin" });
};