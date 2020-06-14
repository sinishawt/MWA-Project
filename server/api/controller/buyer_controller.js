const buyer = require('../models/Buyer');

exports.insert = (req,res,next) =>{
    buyer.create(req.body)
    .then(result =>{
        res.status(200).send(result._id);
    })
    .catch(err=>{
        res.status(500).send({errMsg: err});
    })
};

exports.list = (req, res , next) =>{
    buyer.find()
    .then(buyers =>{
        res.status(200).send(buyers);
    })
    .catch(err=>{
        res.status(500).send({errMsg: err});
    })
};

exports.findBuyer = (req,res,next) =>{
    buyer.findById(req.params.buyerid)
    .then(result=>{
        res.status(200).send(result);
    }).catch(err=>{
        res.status(500).send({errMsg: err});
    })
};

exports.removeBuyer = (req,res, next) =>{
    buyer.findByIdAndDelete(req.params.buyerid)
    .then(result=>{
        res.status(200).send(result);
    }).catch(err=>{
        res.status(500).send({ errMsg: err });
    })
};


