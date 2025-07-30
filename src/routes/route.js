const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.post("/createBook", bookController.createBooks);
router.get("/getBooks", bookController.totalSalesPerAuthor);
router.get("/specificAuthorPrice", bookController.specificAuthorTotalBookPrice);

module.exports = router;
