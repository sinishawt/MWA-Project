const Seller = require('../models/Seller');
const User = require('../models/User');

exports.registerAsSeller = (req, res, next) => {
    User.create(req.body)
    .then(result => {
        res.status(201).send({id: result._id});
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};