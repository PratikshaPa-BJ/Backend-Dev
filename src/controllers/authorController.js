const authorModel = require("../models/authorModel");
const redis = require("redis");

const { promisify } = require("util");

//1. Connect to the redis server
const redisClient = redis.createClient(
  18512,
  "redis-18512.c301.ap-south-1-1.ec2.redns.redis-cloud.com",
  { no_ready_check: true }
);
redisClient.auth("rqHrZGH1rCadGivzinWBJRMJsId33KWM", function (err) {
  if (err) throw err;
});

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
});

//2. Prepare the functions for each command

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);

const createAuthor = async function (req, res) {
  let data = req.body;
  let authorCreated = await authorModel.create(data);
  res.send({ data: authorCreated });
};

const fetchAuthorProfile = async function (req, res) {
  //3. Start using the redis command  
  let cachedProfileData = await GET_ASYNC(`${req.params.authorId}`);
    //  redisClient.del(`${req.params.authorId}`)
    
  if (cachedProfileData) {
    res.send(cachedProfileData);
  } else {
    let profile = await authorModel.findById(req.params.authorId);
    await SET_ASYNC(`${req.params.authorId}`, JSON.stringify(profile));
    res.send({ data: profile });
  }
};

module.exports.createAuthor = createAuthor;
module.exports.fetchAuthorProfile = fetchAuthorProfile;
