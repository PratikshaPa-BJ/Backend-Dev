const axios = require("axios");

const getStates = async function (req, res) {
  try {
    let getDataFromAPI = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    var result = await axios(getDataFromAPI);
    let getData = result.data;
    console.log(getData);
    res.status(200).send({ msg: getData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error.message });
  }
};

const getDistricts = async function (req, res) {
  try {
    let stateIdFromReq = req.params.stateId;
    let getDataFromAPI = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateIdFromReq}`,
    };
    var result = await axios(getDataFromAPI);
    res.status(200).send({ msg: result.data });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(` query params are: ${pin}  ${date}`);
    let getDataFromAPI = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    var result = await axios(getDataFromAPI);
    res.status(200).send({ msg: result.data });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
const getByDistrict = async function (req, res) {
  try {
    let district = req.query.district_id;
    let date = req.query.date;
    console.log(` query params are: ${district}  ${date}`);
    var getDataFromAPI = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`,
    };
    let result = await axios(getDataFromAPI);
    res.status(200).send({ msg: result.data });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

const getOtp = async function (req, res) {
  try {
    let dataFromBody = req.body;
    console.log(dataFromBody);
    let getDataFromAPI = {
      method: "post",
      url: "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
      data: dataFromBody,
    };
    let result = await axios(getDataFromAPI);
    res.status(200).send({ msg: result.data });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

const getUsersData = async function (req, res) {
  try {
    var dataFromAPI = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    };
    let result = await axios(dataFromAPI);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getByDistricts = getByDistrict;
module.exports.getOtp = getOtp;
module.exports.getUserDataFromExternalAPI = getUsersData;
