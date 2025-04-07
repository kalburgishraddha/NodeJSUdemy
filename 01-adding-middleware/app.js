const express = require('express');

const app = express();

app.use('/add-product',(req,res,next)=> {
    console.log("inside another middleware");
    res.send('<h1>The "Add product" Page</h1>');
});

app.use('/',(req,res,next)=> {
    console.log("inside another middleware");
    res.send('<h1>Hello from express</h1>');
});
app.listen(3000);