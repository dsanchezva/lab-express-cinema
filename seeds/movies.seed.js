const mongoose = require("mongoose");
const allMovies = require("./data.seed.js");
const Movie = require("../models/Movie.model.js");
mongoose
  .connect("mongodb://127.0.0.1:27017/lab-express-cinema")
  .then(() => {
    console.log("conect to the DB");
    return Movie.insertMany(allMovies);
  })
  .then(() => {
    console.log("movies added to db");
    return mongoose.disconnect();
  })
  .then(() => {
    console.log("conection with db finished");
  })
  .catch((err) => {
    next(err);
  });
