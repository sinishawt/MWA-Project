const User = require('../models/User');
const ApiResponse = require('../models/api.response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/key');

exports.signin = async(req, res, next) => {
    console.log("authentication: sign() ....");
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const isValid = await bcrypt.compare(req.body.password, user.password);

            // console.log("isValid : " + isValid);

            if (isValid) {
                const token = jwt.sign({ data: req.body.email },
                    config.jwtKey, {
                        expiresIn: config.jwtExpirySeconds
                    });

                user.password = 'not-visible';
                //store user info in req.body 
                req.user = user;
                console.log(user);
                res.status(200).send(new ApiResponse(200, 'success', {
                    token: token,
                    expiresIn: config.jwtExpirySeconds,
                    user: user
                }));

            } else {
                res.status(401).send(new ApiResponse(401, 'error', { err: 'email or password not exist ' }));
            }

        } else {
            res.status(401).send(new ApiResponse(401, 'error', { err: 'email or password not exist' }));
        }
    } catch (err) {
        res.status(500).send(new ApiResponse(500, 'error', err));
    }
}