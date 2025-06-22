const express = require("express");
const router = express.Router();

router.get("/movies", function (req, res) {
  let movie = [
    "Inception",
    "Gravity",
    "Parasite",
    "Arrival",
    "Interstellar",
    "The Matrix",
  ];
  res.send(movie);
});
router.get("/movies/:indexNumber", function (req, res) {
  let movie = [
    "The Batman",
    "Spiderman",
    "Twilight",
    "The Dark Knight",
    "The Avengers",
    "Superman",
    "Deadpool",
  ];
  let movieLenth = movie.length - 1;

  console.log(JSON.stringify(req.params));
  let index = req.params.indexNumber;
  if (index > movieLenth) {
    res.send("Please give valid index");
  } else {
    res.send(
      "The movie name of specific index " + index + " is: " + movie[index]
    );
  }
});

router.get("/films", function (req, res) {
  let film = [
    { id: 1, name: "Passengers" },
    { id: 2, name: "Divergent" },
    { id: 3, name: "Life" },
    { id: 4, name: "Predator" },
  ];
  res.send(film);
});

router.get("/films/:filmID", function (req, res) {
  let films = [
    { id: 1, name: "Passengers" },
    { id: 2, name: "Divergent" },
    { id: 3, name: "Life" },
    { id: 4, name: "Predator" },
  ];
  let filmsLength = films.length;
  let filmId = req.params.filmID;
  if (filmId > filmsLength || filmId <= 0) {
    res.send("No Movie Exists With This Id");
  } else {
    res.send(films[filmId - 1].name);
  }
});
router.get("/film1/:filmID", function (req, res) {
  let films = [
    { id: 1, name: "Passengers" },
    { id: 2, name: "Divergent" },
    { id: 3, name: "Life" },
    { id: 4, name: "Predator" },
  ];
  let filmsLength = films.length;
  let filmId = req.params.filmID;
  if (filmId > filmsLength || filmId == 0) {
    res.send("No Movie Exists With This Id");
  } else {
    for (film of films) {
      console.log(film);
      if (filmId == film.id) {
        res.send("The movie name of corresponding id is: " + film.name);
      }
    }
  }
});

module.exports = router;
