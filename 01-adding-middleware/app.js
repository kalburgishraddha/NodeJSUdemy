const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=> {
    console.log("inside another middleware");
    res.send('<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button"><form></html>');
});

app.use('/product',(req,res,next)=> {
    console.log("Product",req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=> {
    console.log("inside another middleware");
    res.send('<h1>Hello from express</h1>');
});
app.listen(3000);