const Product = require('../models/Product');
const Cart = require('../models/ShoppingCart')
const mongoose = require('mongoose');

exports.addToShoppingCart = (req, res, next) => {
  
    req.buyer.addToCart(req.params.id)
        .then(() => {
            res.redirect('/');
            console.log("Pro Id", req.params.id);
        }).catch(err => console.log(err));
}

exports.addShoppingCart = (req, res, next)=>{

    let productId = req.params.id;
    let cart = new Cart(req.session.cart? req.session.cart: {});
 
    Product.findById(productId, function(err, Product){
        if(err){
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
       // res.send("beko")
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
