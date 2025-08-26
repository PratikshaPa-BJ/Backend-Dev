const express = require("express");
const router = express.Router();
const coWinController = require("../controllers/cowinController");

router.get("/cowin/states", coWinController.getStates);
router.get("/cowin/districtsInState/:stateId", coWinController.getDistricts);
router.get("/cowin/getByPin", coWinController.getByPin);
router.get("/cowin/getByDistrict", coWinController.getByDistricts)
router.post("/cowin/getOTP", coWinController.getOtp);

router.get("/getUsers", coWinController.getUserDataFromExternalAPI)



module.exports = router;
