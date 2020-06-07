const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const mongoose = require('mongoose');

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET Request!'
    });
});
router.post('/', (req, res, next)=>{
   
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        catagoryId: req.body.catagoryId,
        price: req.body.price,
        status: req.body.status,
        imageName: req.body.imageName,
        descreption: req.body.descreption,
        sellerId: req.body.sellerId
    });

    product.save()
            .then(result => {
                console.log(product);
            })
            .catch(err => {
                console.log(err)
            });

    res.status(200).json({
        message: 'Handling POST Request!',
        createdProduct: product
    });
    
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message: 'Message discovred'
        });
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Product Updated!'
    });
});

router.delete('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Product Deleted!'
    });
});


module.exports = router;