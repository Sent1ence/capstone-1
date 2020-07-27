//Use middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Include the routes to middleware
app.use('/api', apiRoutes);

//Declare port to run the server
const PORT = process.env.PORT || 8081;

//Start the server
const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(`err: ${error.message}`);
  } else {
    console.log('Server is running on port', server.address().port);
  }
});