const Seller = require('../models/Seller');
// const User = require('../models/User');

// exports.registerAsSeller = (req, res, next) => {
//     User.create(req.body)
//     .then(result => {
//         res.status(201).send({id: result._id});
//     })
//     .catch(err => {
//         res.status(500).send({errMsg: err});
//     });
// };

exports.insert = (req, res, next) => {
    Seller.create(req.body)
    .then(result => {
        res.status(201).send({id: result._id});
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.list = (req, res, next) => {
    Seller.find()
    .then(sellers => {
        res.status(200).send(sellers);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.getById = (req, res, next) => {
    Seller.findById(req.params.sellerId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.patchById = (req, res, next) => {
    Seller.findById(req.params.sellerId)
    .then(seller => {
        for(let i in req.body){
            seller[i] = req.body[i];
        }
        return seller.save();
    })
    .then(result => {
        res.status(204).send({})
    });
};

exports.removeById = (req, res, next) => {
    Seller.findByIdAndDelete(req.params.sellerId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};