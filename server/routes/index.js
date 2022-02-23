var express = require('express');
var router = express.Router();

// const orderController = require('../controllers').order;
// const orderedProductController = require('../controllers').orderedProduct;
const productController = require('../controllers').product;
// const productInCartController = require('../controllers').productInCart;
// const userController = require('../controllers').user;

router.post('/product', productController.add);
router.get('/product', productController.getAllById);

module.exports = router;
