const express = require('express');
app = express();

// Require router files
const userRoutes = require('./api/user');
const farmRoutes = require('./api/farm');
const loginRoutes = require('./api/login');
app.use('/user', userRoutes);
app.use('/farm', farmRoutes);
app.use('/login', loginRoutes);

module.exports = app;
