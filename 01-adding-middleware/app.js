const http = require('http');
const express = require('express');

const app = express();

app.use((req,res,next)=> {
    console.log("inside middleware");
    next(); //this allows request to continue to next middleware in line
});

app.use((req,res,next)=> {
    console.log("inside another middleware");
    res.send('<h1>Hello from express</h1>');
});

const server = http.createServer(app);

server.listen(3000);