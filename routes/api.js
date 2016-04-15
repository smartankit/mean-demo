
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Product = require('../models/product');
var User = require('../models/user');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

// Return router
module.exports = router;
