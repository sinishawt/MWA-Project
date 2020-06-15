const order = require('../models/Order');

exports.insert = (req,res,next) =>{
    order.create(req.body)
        .then(result =>{
            res.status(200).send(result._id);
        })
        .catch(err=>{
            res.status(500).send({errMsg: err});
        })
};

exports.list = (req, res , next) =>{
    order.find()
        .then(orders =>{
            res.status(200).send(orders);
        })
        .catch(err=>{
            res.status(500).send({errMsg: err});
        })
};

exports.findOrder = (req,res,next) =>{
    order.findById(req.params.orderid)
        .then(result=>{
            res.status(200).send(result);
        }).catch(err=>{
        res.status(500).send({errMsg: err});
    })
};

exports.removeOrder = (req,res, next) =>{
    order.findByIdAndDelete(req.params.orderid)
        .then(result=>{
            res.status(200).send(result);
        }).catch(err=>{
        res.status(500).send({ errMsg: err });
    })
};


