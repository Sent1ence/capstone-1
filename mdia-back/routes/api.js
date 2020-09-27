const express = require('express');
app = express();

// Require router files
const userRoutes = require('./api/user');
const farmRoutes = require('./api/farm');
const equipmentRoutes = require('./api/equipment')
const loginRoutes = require('./api/login');
const uploadRoutes = require('./api/upload')
const waterRoutes = require('./api/water')

// Include routes to express
app.use('/user', userRoutes);
app.use('/farm', farmRoutes);
app.use('/login', loginRoutes);
app.use('/equipment', equipmentRoutes);
app.use('/upload-image', uploadRoutes);
app.use('/water', waterRoutes)
//Export the file to be used in server.js
module.exports = app;