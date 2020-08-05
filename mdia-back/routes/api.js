const express = require('express');
app = express();

// Require router files
const userRoutes = require('./api/user');
const farmRoutes = require('./api/farm');
const loginRoutes = require('./api/login');

// Include routes to express
app.use('/user', userRoutes);
app.use('/farm', farmRoutes);
app.use('/login', loginRoutes);

//Export the file to be used in server.js
module.exports = app;
