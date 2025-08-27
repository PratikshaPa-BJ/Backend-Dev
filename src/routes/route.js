const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/weatheroflondon", weatherController.getWeatherOfLondon);
router.get('/allcityweather', weatherController.weatherOfAllCity);
router.get('/weatherofallcity', weatherController.weatherDetails)



module.exports = router;
