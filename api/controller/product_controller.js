const product = require('../models/Product');
const mongoose = require('mongoose');

exports.list = (req, res, next)=>{
    product.find()
            .select('title price _id status imageName descreption')
            .exec()
            .then(docs => {
                console.log(docs);
                const response ={
                    count: docs.length,
                    products: docs
                };
               // if(docs.length >= 0){
                    res.status(200).json(response);
                // } else{
                //     res.status(404).json({
                //         message: 'No entries found'
                //     });
                // }
            })
            .catch(err => {
                console.log();
                res.status(500).json({
                    error: err
                });
            });
};

exports.insert = (req, res, next)=>{
  
    const prod = new product({
        
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        catagoryId: req.body.catagoryId,
        price: req.body.price,
        status: req.body.status,
        imageName: req.body.imageName,
        descreption: req.body.descreption,
        sellerId: req.body.sellerId
    });

    prod.save()
            .then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'Product inserted Successfully',
                    createdProduct: {
                        title: result.title,
                        catagoryId: result.catagoryId,
                        price: result.price,
                        status: result.status,
                        imageName: result.imageName,
                        descreption: result.descreption,
                        sellerId: result.sellerId
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            });  
};

exports.findProduct = (req, res, next)=>{

    const id = req.params.productId;
    product.findById(id)
            .select('title price _id status imageName descreption')
            .exec()
            .then(doc => {
                console.log("Data from the database", doc);
                if(doc){
                    res.status(200).json(doc);
                } else{
                    res.status(404).json({message: 'No Valid Entry Found or Provided'});
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err})
            });

};

exports.updateProduct = (req, res, next)=>{
    const id = req.params.productId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    product.update({_id: id}, {$set: updateOps})
            .exec()
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            });
};
exports.deleteProduct = (req, res, next)=>{
    const id = req.params.productId;
    product.remove({_id: id})
            .exec()
            .then(result => {
                res.status(200).json( {message: 'Product Deleted Successfully'});
                
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
}