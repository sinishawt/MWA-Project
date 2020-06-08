const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const mongoose = require('mongoose');
const productController = require('../controller/product_controller');

router.get('/', productController.list);
router.post('/', productController.insert);
router.get('/:productId', productController.findProduct);
router.patch('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);


module.exports = router;