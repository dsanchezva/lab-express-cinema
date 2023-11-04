const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get("/", async (req, res, next) => {
  try {
    res.render("index");
  } catch (err) {
    next(err);
  }
});
//GET "/movies" => listar solo las imagenes y los titulos de las peliculas
router.get("/movies", async (req, res, next) => {
  try {
    const response = await Movie.find().select({
      title: 1,
      image: 1,
    });
    res.render("./movies/movies.hbs", { allMovies: response });
  } catch (err) {
    next(err);
  }
});

//GET "/movies/:id" => buscamos una pelicula por la _id

router.get("/movies/:movieId", async (req, res, next) => {
  try {
    const response = await Movie.findById(req.params.movieId);
    console.log(response);
    res.render("./movies/single-movie.hbs", { oneMovie: response });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
