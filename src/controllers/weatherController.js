const axios = require("axios");

const weatherOfLondon = async function (req, res) {
  try {
    let country = req.query.q;
    let appId = req.query.appid;
    let getDataFromAPI = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`,
    };
    let result = await axios(getDataFromAPI);
    let weatherData = result.data;
    let temp = weatherData.main.temp;
    console.log(temp);
    res.status(200).send({ msg: weatherData, tempOfLondon: temp });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

const weatherOfAllCities = async function (req, res) {
  try {
    let WeatherData = [];
    let city = req.query.q;
    let apiKey = req.query.appid;
    let city1 = req.query.q1;
    let city2 = req.query.q2;
    let city3 = req.query.q3;
    let city4 = req.query.q4;
    let city5 = req.query.q5;
    let city6 = req.query.q6;

    let dataFromAPI = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    };
    let result = await axios(dataFromAPI);
    let weatherOfSpecificCity = result.data;
    let specificCity = weatherOfSpecificCity.name;
    let specificTemp = weatherOfSpecificCity.main.temp;
    let weatherDetails = { city: specificCity, temp: specificTemp };
    WeatherData.push(weatherDetails);

    let dataFromAPI1 = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}`,
    };
    let result1 = await axios(dataFromAPI1);
    let specififcCity1 = result1.data.name;
    let specificTemp1 = result1.data.main.temp;
    let weatherDetails1 = { city: specififcCity1, temp: specificTemp1 };
    WeatherData.push(weatherDetails1);

    let dataFromAPI2 = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}`,
    };
    let result2 = await axios(dataFromAPI2);
    let specificCity2 = result2.data.name;
    let specificTemp2 = result2.data.main.temp;
    let weatherDetails2 = { city: specificCity2, temp: specificTemp2 };
    WeatherData.push(weatherDetails2);

    let dataFromAPI3 = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}`,
    };
    let result3 = await axios(dataFromAPI3);
    let specificCity3 = result3.data.name;
    let specificTemp3 = result3.data.main.temp;
    let weatherDetails3 = { city: specificCity3, temp: specificTemp3 };
    WeatherData.push(weatherDetails3);

    let dataFromAPI4 = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=${apiKey}`,
    };
    let result4 = await axios(dataFromAPI4);
    let specificCity4 = result4.data.name;
    let specificTemp4 = result4.data.main.temp;
    let weatherDetails4 = { city: specificCity4, temp: specificTemp4 };
    WeatherData.push(weatherDetails4);

    let dataFromAPI5 = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city5}&appid=${apiKey}`,
    };
    let result5 = await axios(dataFromAPI5);
    let specificCity5 = result5.data.name;
    let specificTemp5 = result5.data.main.temp;
    let weatherDetails5 = { city: specificCity5, temp: specificTemp5 };
    WeatherData.push(weatherDetails5);

    let dataFromAPI6 = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city6}&appid=${apiKey}`,
    };
    let result6 = await axios(dataFromAPI6);
    let specificCity6 = result6.data.name;
    let specificTemp6 = result6.data.main.temp;
    let weatherDetails6 = { city: specificCity6, temp: specificTemp6 };
    WeatherData.push(weatherDetails6);
    console.log(WeatherData);
    let WeatherDataAfterSorting = WeatherData.sort((a, b) => a.temp - b.temp);

    res.status(200).send({ msg: WeatherDataAfterSorting });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

const weatherDetails = async function (req, res) {
  try {
    let newArr = [];
    let city = req.query.q;
    let apiKey = req.query.appid;
    let cityArr = city.split(" ");
    // console.log(cityArr);
    let arrLen = cityArr.length;
    for (let i = 0; i < arrLen; i++) {
      let dataFromAPI = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityArr[i]}&appid=${apiKey}`,
      };
      let axiosCall = await axios(dataFromAPI);
      let result = axiosCall.data;
      let weatherData = { city: result.name, temp: result.main.temp };
      newArr.push(weatherData);
    }
    let sortOnTemp = newArr.sort((a, b) => a.temp - b.temp);
    // console.log(sortOnTemp);
    res.status(200).send({ data: sortOnTemp });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports.getWeatherOfLondon = weatherOfLondon;
module.exports.weatherOfAllCity = weatherOfAllCities;
module.exports.weatherDetails = weatherDetails;
