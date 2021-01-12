// This file only purpose is to include the route handler
// Route class
require('module-alias/register')
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const app = express();


//Connect to database
const Knex = require('knex');
const knexfile = require('./knexfile');
const knex = Knex(knexfile.development);
const { Model } = require('objection');
Model.knex(knex);

// If run behind proxy
//app.set('trust proxy', 1)
//Wire up connectRedis with session
 const RedisStore = connectRedis(session);

//Configure Redis 
const redisClient = redis.createClient({
  port: 6379,
  host: 'localhost'
}) 

// Require router files
const apiRoutes = require('./routes/api');

//Use middleware
app.use(helmet());
app.use(cors());

// Configure session
app.use(session({
  store: new RedisStore({client: redisClient}),
  secret: process.env.TOKEN_SECRET,
  saveUninitialized: false,
  resave: false,
  name: 'sessionID',
  cookie: {
    secure: false, //Change to true in production
    httpOnly: true, //Prevents client-side javascript access
    maxAge: 1000 * 60 * 30, // Session age in miliseconds

  }
})); 
app.use(express.json());
// Include the routes to middleware
app.post('/test-url', (req, res) => {
  const test = req.body.test
  return res.send(`${test} is not undefined`)
})

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