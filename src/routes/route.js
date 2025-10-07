const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController')
const bookController = require('../controllers/bookController')
const publisherController = require('../controllers/publisherController')

router.post('/authors', authorController.createAuthor)
router.get('/authors/:authorId', authorController.fetchAuthorProfile)

router.post('/books', bookController.createBook)
router.get('/books', bookController.getBooks)

router.post('/publishers', publisherController.createPublisher)


module.exports = router;