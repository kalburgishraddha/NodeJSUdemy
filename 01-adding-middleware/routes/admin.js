const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=> {
    console.log("inside another middleware");
    res.send('<html><form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button"><form></html>');
});

router.post('/product',(req,res,next)=> {
    console.log("Product",req.body);
    res.redirect('/');
});

module.exports = router;