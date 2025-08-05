const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/', bookController.createBook);
router.get('/', bookController.getBookByID);
router.get('/', bookController.updateBook);
router.get('/', bookController.deleteBook);

module.exports = router;