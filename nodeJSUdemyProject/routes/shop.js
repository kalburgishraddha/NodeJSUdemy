const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/',(req,res,next)=> {
    console.log("inside another middleware");
    console.log("shop.js products",adminData.products)
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop',{
        prods:adminData.products,
        pageTitle:'Shop',
        path:'/', 
        hasProducts: adminData.products.length>0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;