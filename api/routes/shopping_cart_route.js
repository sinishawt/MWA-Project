const express = require('express');
const router = express.Router();
const Cart = require('../models/ShoppingCart')
const Product = require('../models/Product');
const mongoose = require('mongoose');
const shoppingCartController = require('../controller/shopping_cart_controller');

router.get('/add-to-cart/:id', shoppingCartController.addShoppingCart);
router.get('/listShoppingCart', shoppingCartController.shoppingCart);



module.exports = router;