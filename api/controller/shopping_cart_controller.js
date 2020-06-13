const Product = require('../models/Product');
const Cart = require('../models/ShoppingCart')
const mongoose = require('mongoose');

exports.addShoppingCart = (req, res, next)=>{

    let productId = req.params.id;
    let cart = new Cart(req.session.cart? req.session.cart: {});
    console.log("mem 11")
    Product.findById(productId, function(err, product){
        if(err){
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
};
exports.shoppingCart = (req, res, next) => {
    if(!req.session.cart){
        res.status(404).json({message: 'No Items in the Shopping Cart'});
    }
    let cart = new Cart(req.session.cart);
    res.status(200).json(cart);
};
