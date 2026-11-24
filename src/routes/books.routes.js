const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  downloadBook,
} = require('../controllers/books');

router.get('/', getBooks);
router.get('/:id', getBookById);

router.post('/', upload.single('fileBook'), createBook);

router.put('/:id', upload.single('fileBook'), updateBook);
router.delete('/:id', deleteBook);

router.get('/:id/download', downloadBook);

module.exports = router;
