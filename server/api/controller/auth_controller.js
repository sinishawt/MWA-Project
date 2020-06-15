const User = require('../models/User');
const ApiResponse = require('../models/api.response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/key');

exports.signin = async(req, res, next) => {
    console.log("inside sign()");
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            //console.log(user);        
            console.log("req.body.password : " + req.body.password);
            console.log("user.password : " + user.password);

            //const isValid = await bcrypt.compare(req.body.password, user.password);
            var isValid;
            if (req.body.password.trim() === user.password.trim()) {
                isValid = true;
            }
            console.log("isValid : " + isValid);

            if (isValid) {
                const token = jwt.sign({ data: req.body.email }, config.jwtKey, {
                    expiresIn: config.jwtExpirySeconds
                });
                res.status(200).send(new ApiResponse(200, 'success', { token: token, expiresIn: config.jwtExpirySeconds, user: user }));
            } else {
                res.status(401).send(new ApiResponse(401, 'error', { err: 'email or password not exist : 1' }));
            }

        } else {
            res.status(401).send(new ApiResponse(401, 'error', { err: 'email or password not exist: 2' }));
        }
    } catch (err) {
        res.status(500).send(new ApiResponse(500, 'error', err));
    }
}