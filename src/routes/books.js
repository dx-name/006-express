const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  downloadBook,
} = require('../controllers/books');
const upload = require('../middleware/upload');

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', upload.single('fileBook'), createBook);
router.put('/:id', upload.single('fileBook'), updateBook);
router.delete('/:id', deleteBook);
router.get('/:id/download', downloadBook);

module.exports = router;
