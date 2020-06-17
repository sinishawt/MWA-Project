








const Address = require('../models/Address');

exports.insert = (req, res, next) => {
    Address.create(req.body)
    .then(result => {
        res.status(201).send({id: result._id});
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.list = (req, res, next) => {
    Address.find()
    .then(address => {
        res.status(200).send(address);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

// exports.getById = (req, res, next) => {
//     Review.findById(req.params.reviewId)
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(err => {
//         res.status(500).send({errMsg: err});
//     });
// };

// exports.patchById = (req, res, next) => {
//     Review.findById(req.params.reviewId)
//     .then(review => {
//         for(let i in req.body){
//             review[i] = req.body[i];
//         }
//         return review.save();
//     })
//     .then(result => {
//         res.status(204).send({})
//     });
// };

// exports.removeById = (req, res, next) => {
//     Review.findByIdAndDelete(req.params.reviewId)
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(err => {
//         res.status(500).send({ errMsg: err });
//     });
// };
