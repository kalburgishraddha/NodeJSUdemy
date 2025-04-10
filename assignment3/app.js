const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(usersRoutes);
app.listen(3000);