const express = require('express');
app = express();

// Require router files
const authRoutes = require('./api/auth')
const userRoutes = require('./api/user');
const farmRoutes = require('./api/farm');
const equipmentRoutes = require('./api/equipment')
const uploadRoutes = require('./api/upload')
const waterRoutes = require('./api/water')
const billRoutes = require('./api/bill')

// Include routes to express
app.use('/auth', authRoutes)
app.use('/user', userRoutes);
app.use('/farm', farmRoutes);
app.use('/equipment', equipmentRoutes);
app.use('/upload-image', uploadRoutes);
app.use('/water', waterRoutes)
app.use('/bill', billRoutes)
//Export the file to be used in server.js
module.exports = app;