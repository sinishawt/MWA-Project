const express = require('express');
const router = express.Router();

const buyerController = require('../controller/buyer_controller');

router.get('/', buyerController.list);
router.post('/' , buyerController.insert);
router.get('/:buyerid', buyerController.findBuyer);
router.delete('/:buyerid' , buyerController.removeBuyer);



module.exports = router;