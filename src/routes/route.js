const express = require("express");
const router = express.Router();
const memesController = require("../controllers/memesController");

router.get("/allMemes", memesController.getMemesDetails);
router.post("/createcaption", memesController.createCaption)



module.exports = router;
