const express = require('express');
const router = express.Router();

const seller_Controller = require('../controller/seller_controller');

router.get('/', seller_Controller.list);
router.post('/', seller_Controller.insert);

router.get('/products/:sellerId', seller_Controller.findProductsBySellerId);
router.post('/products/', seller_Controller.addProductsBySellerId);

router.get('/products/edit/:productId', seller_Controller.getById);
router.patch('/products/edit/:productId', seller_Controller.patchById);
router.delete('/products/edit/:productId', seller_Controller.removeById);

//get by id
router.get('/:sellerId', seller_Controller.getById);
router.patch('/:sellerId', seller_Controller.patchById);
router.delete('/:sellerId', seller_Controller.removeById);



module.exports = router;