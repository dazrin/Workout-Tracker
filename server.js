// Dependancies
const express = require("express");
const mongoose = require("mongoose");

// Specify port to use for heroku and locally
const PORT = process.env.PORT || 3000;

// Create express instance for our app
const app = express();

// Allow our app to read .json objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow app to see contents of public directory
app.use(express.static("public"));

// Connect to our database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workoutDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Allow app to use routes
app.use(require("./routes/api.js"));
app.use(require("./routes/routes.js"));

// Make application listen on specified PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});