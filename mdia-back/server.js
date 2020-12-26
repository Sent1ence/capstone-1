// This file only purpose is to include the route handler
// Route class
require('module-alias/register')
const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const app = express();


//Connect to database
const Knex = require('knex');
const knexfile = require('./knexfile');
const knex = Knex(knexfile.development);
const { Model } = require('objection');
Model.knex(knex);

// Require router files
const apiRoutes = require('./routes/api');

//Use middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
// Include the routes to middleware
app.use('/api/v1', apiRoutes);


//Error handler must be the last one among other routes or middleware to function properly
const { errorHandler } = require("./helpers/error.js");
app.use((err, req, res, next) => {
  errorHandler(err, res);
})

//Declare port to run the server
const PORT = process.env.PORT || 3000;

//Start the server
const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(`err: ${error.message}`);
  } else {
    console.log('Server is running on port', server.address().port);
  }
});