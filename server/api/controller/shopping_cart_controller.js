const Product = require('../models/Product');
const Cart = require('../models/ShoppingCart')
const mongoose = require('mongoose');

exports.addToShoppingCart = (req, res, next) => {
  
    req.buyer.addToCart(req.params.id)
            .then(docs => {
                res.status(200).send(docs.cart);
        }).catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    req.buyer
        .populate()
        .execPopulate()
        .then(docs => {
          res.status(200).send(docs.cart);
            
        })
        .catch(err => console.log(err));
}

// session start .... not working now
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
//session end
