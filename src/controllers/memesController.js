const axios = require("axios");

const getMemesDetails = async function (req, res) {
  try {
    let objInAxios = {
      method: "get",
      url: "https://api.imgflip.com/get_memes",
    };
    let dataFromAPI = await axios(objInAxios);
    let result = dataFromAPI.data;
    res.status(200).send({ msg: result });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

const createCaption = async function (req, res) {
  try {
    let memesId = req.query.template_id;
    let caption1 = req.query.text0;
    let caption2 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;
    let objInAxios = {
      method: "get",
      url: `https://api.imgflip.com/caption_image?template_id=${memesId}&text0=${caption1}&text1=${caption2}&username=${username}&password=${password}`,
    };
    let dataFromAPI = await axios(objInAxios);
    // console.log(dataFromAPI);
    let result = dataFromAPI.data;
    res.status(200).send({ msg: result });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports.getMemesDetails = getMemesDetails;
module.exports.createCaption = createCaption;
