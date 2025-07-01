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
  if (index > movieLenth || index < 0) {
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
    res.send("The film name of specific id is: " + films[filmId - 1].name);
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
router.get("/test-me", function (req, res) {
  const arr = [1, 2, 3, 4, 6, 7, 8, 9];
  let missingNum;
  let n = arr[arr.length - 1];
  const actualSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (i of arr) {
    sum += i;
  }
  missingNum = actualSum - sum;
  console.log("Missing number in array is: " + missingNum);
  res.send("Missing number in array is : " + missingNum);
});

router.get("/test-me1", function (req, res) {
  let arr = [33, 34, 35, 37, 38, 39];
  let n = arr.length + 1;
  let first = arr[0];
  let last = arr[arr.length - 1];
  let actualSum = (n * (first + last)) / 2;
  let sum = 0;
  let missingNumber = 0;
  for (let number of arr) {
    sum += number;
  }
  missingNumber = actualSum - sum;
  console.log("Missing number in array is: " + missingNumber);
  res.send("Missing Number in array is: " + missingNumber);
});



module.exports = router;
