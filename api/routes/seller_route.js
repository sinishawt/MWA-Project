const express = require('express');
const router = express.Router();

const seller_Controller = require('../controller/seller_controller');

router.get('/', seller_Controller.list);
router.post('/', seller_Controller.insert);

//get by id
router.get('/:sellerId', seller_Controller.getById);
router.patch('/:sellerId', seller_Controller.patchById);
router.delete('/:sellerId', seller_Controller.removeById);



module.exports = router;