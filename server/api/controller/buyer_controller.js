const buyer = require('../models/Buyer');
const order = require('../models/Order');
const product = require('../models/Product');


exports.getNotification = (req, res, next) => {
    product.find({})
        .exec()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });

}

exports.insert = (req, res, next) => {
    buyer.create(req.body)
        .then(result => {
            res.status(200).send(result._id);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        })
};

exports.list = (req, res, next) => {
    buyer.find()
        .then(buyers => {
            res.status(200).send(buyers);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        })
};

exports.findBuyer = (req, res, next) => {
    buyer.findById(req.params.buyerid)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send({ errMsg: err });
        })
};

exports.removeBuyer = (req, res, next) => {
    buyer.findByIdAndDelete(req.params.buyerid)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send({ errMsg: err });
        })
};

exports.enterShippingAddress = (req, res, next) => {
    //console.log("////" + req.body.shippingAddress.state);

    order.findByIdAndUpdate(req.params.buyerId, {
            shippingAddress: {
                zipCode: req.body.zipCode,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                phoneNo: req.body.phoneNo,
                country: req.body.country
                    // buyerId: req.params.buyerId,
                    // status: req.body.status, 
            }
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });
};

exports.getShippingAddress = (req, res, next) => {
    buyer.findById(req.params.buyerId)
        .exec()
        .then(result => {
            if (result) {
                //console.log("Data from the database: ", result.shippingAddress);
                res.status(200).json(result.shippingAddress);

            } else {
                res.status(404).json({ message: 'No Shipping Address' });
            }
            //res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });

}

exports.enterBillingInfo = (req, res, next) => {
    console.log("////" + req.body.nameOnCard);

    buyer.findByIdAndUpdate(req.params.buyerId, {
            billingInfo: {
                nameOnCard: req.body.nameOnCard,
                cardNumber: req.body.cardNumber,
                cvv: req.body.cvv,
                expiryDate: req.body.expiryDate,
                zipCode: req.body.zipCode,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                phoneNo: req.body.phoneNo,
                country: req.body.country,
                buyerId: req.params.buyerId,
                status: req.body.status,
            }
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });
};

exports.getBillingInfo = (req, res, next) => {
    buyer.findById(req.params.buyerId)
        .exec()
        .then(result => {
            if (result) {
                //console.log("Data from the database: ", result.shippingAddress);
                res.status(200).json(result.billingInfo);

            } else {
                res.status(404).json({ message: 'No Billing Info' });
            }
            //res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });

}

exports.getOrdersByBuyerId = (req, res, next) => {
    order.find({ buyerId: req.params.buyerId })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });

}