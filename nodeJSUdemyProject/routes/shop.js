const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/',(req,res,next)=> {
    console.log("inside another middleware");
    console.log("shop.js products",adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;