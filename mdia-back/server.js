// This file only purpose is to include the route handler
// Route class
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