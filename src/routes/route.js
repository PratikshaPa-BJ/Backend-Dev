const express = require("express");
const router = express.Router();
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const aws = require("aws-sdk");

// you can never use await on callback..if you awaited something , then you can be sure it is within a promise..

aws.config.update({
  accessKeyId: process.env.AWS_Access_Key_Id,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

let uploadFile = async (file) => {
  // this function will upload file to aws and return the link

  return new Promise(function (resolve, reject) {
    // we will be using s3 service of aws

    const s3 = new aws.S3({ apiVersion: "2006-03-01" });
    const uploadParams = {
      ACL: "public-read",
      Bucket: "classroom-training-bucket",
      Key: "abc/" + file.originalname,
      Body: file.buffer,
    };
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        return reject({ errror: err.message });
      }
      console.log("File uploaded successfully..");
      return resolve(data.Location);
    });
  });
};

router.post("/aws-demo", async function (req, res) {
  try {
    let filesExist = req.files;
    // console.log(filesExist)
    if (filesExist && filesExist.length > 0) {
      // upload to s3 and get the uploaded link
      // res.send the link back to frontend
      let uploadedFileURL = await uploadFile(filesExist[0]);
      res.status(201).send({ msg: "file uploaded successfully", data: uploadedFileURL });
    } else {
      return res.status(400).send({ msg: "No file found" });
    }
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
});

module.exports = router;
