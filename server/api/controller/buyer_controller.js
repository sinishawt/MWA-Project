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

exports.enterShippingAddress = (req, res, next) => {
    //console.log("////" + req.body.shippingAddress.state);
    
    buyer.findByIdAndUpdate(req.params.buyerId, {
        shippingAddress: {
            zipCode: req.body.shippingAddress.zipCode, 
            street: req.body.shippingAddress.street, 
            city: req.body.shippingAddress.city, 
            state: req.body.shippingAddress.state, 
            phoneNo: req.body.shippingAddress.phoneNo, 
            country: req.body.shippingAddress.country, 
            buyerId: req.params.buyerId,
            status: req.body.shippingAddress.status, 
        }
    })
    .then(result => {
        res.status(200).send(result.shippingAddress);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.getShippingAddress = (req, res, next) => {
    buyer.findById(req.params.buyerId)
    .exec()
    .then(result => {
        if(result){
            //console.log("Data from the database: ", result.shippingAddress);
            res.status(200).json(result.shippingAddress);
            
        } else{
            res.status(404).json({message: 'No Shipping Address'});
        }
        //res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
    
}

exports.enterBillingInfo = (req, res, next) => {
    //console.log("////" + req.body.billingInfo.state);
    
    buyer.findByIdAndUpdate(req.params.buyerId, {
        billingInfo: {
            nameOnCard: req.body.billingInfo.nameOnCard,
            cardNumber: req.body.billingInfo.cardNumber,
            cvv: req.body.billingInfo.cvv,
            expiryDate: req.body.billingInfo.expiryDate,
            zipCode: req.body.billingInfo.zipCode, 
            street: req.body.billingInfo.street, 
            city: req.body.billingInfo.city, 
            state: req.body.billingInfo.state, 
            phoneNo: req.body.billingInfo.phoneNo, 
            country: req.body.billingInfo.country, 
            buyerId: req.params.buyerId,
            status: req.body.billingInfo.status, 
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
        if(result){
            //console.log("Data from the database: ", result.shippingAddress);
            res.status(200).json(result.billingInfo);
            
        } else{
            res.status(404).json({message: 'No Billing Info'});
        }
        //res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
    
}


