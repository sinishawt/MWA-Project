const express = require('express');
const router = express.Router();
const Cart = require('../models/ShoppingCart')
const Product = require('../models/Product');
const mongoose = require('mongoose');
const shoppingCartController = require('../controller/shopping_cart_controller');

router.post('/addToCart/:id', shoppingCartController.addToShoppingCart);
router.get('/getCart/:id', shoppingCartController.getCart);
//routes for session ..start
router.get('/add-to-cart/:id', shoppingCartController.addShoppingCart);
router.get('/listShoppingCart', shoppingCartController.shoppingCart);
//rout for session end

module.exports = router;