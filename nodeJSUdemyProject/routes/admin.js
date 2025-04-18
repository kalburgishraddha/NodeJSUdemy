const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
 
const router = express.Router();

const products = [];

router.get('/add-product',(req,res,next)=> {
    console.log("inside another middleware");
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{pageTitle:"Add Product", path:"/admin/add-product"})
});

router.post('/add-product',(req,res,next)=> {
    console.log("Product",req.body);
    products.push({'title':req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;