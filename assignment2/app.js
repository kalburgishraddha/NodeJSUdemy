const express = require('express');

const app = express();

app.use("/users", (req,res,next)=> {
    console.log("handle route /users");
    res.send("<h1>Page is handling /users route<h1>");
});

app.use("/",(req,res,next)=> {
    console.log("handle route /");
    res.send("<h1>Page is handling / route<h1>");
});

app.listen(3000);