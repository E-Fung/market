var express = require('express');
var router = express.Router();

// const orderController = require('../controllers').order;
// const orderedProductController = require('../controllers').orderedProduct;
const productController = require('../controllers').product;
// const productInCartController = require('../controllers').productInCart;
const userController = require('../controllers').user;

router.post('/product', productController.add);
router.get('/product', productController.getAllById);

router.post('/register', userController.add);

module.exports = router;

// authentication
// make sure that name n password is correct

// authorization
// jwt tokens making sure that the user who sends request is the same as the one who logged in
// creates a session that the user then sends when making request

//usually, the client logs in, seesion id is recieved as cookie, then user sends another request w the session id as authorization
//jwts send the user infomation to the client, information is stored w the client, the request are now deciphered by the server when request are sent
