const express = require('express');
const router = express.Router();
const controller = require('../controllers/views');
const upload = require('../middleware/upload');

router.get('/books', controller.index);
router.get('/books/create', controller.createForm);
router.get('/books/:id', controller.view);
router.get('/books/:id/update', controller.updateForm);

router.post('/books/create',
  upload.fields([
    { name: 'fileCover', maxCount: 1 },
    { name: 'fileBook', maxCount: 1 },
  ]),
  controller.create);

router.post('/books/:id/update',
  upload.fields([
    { name: 'fileCover', maxCount: 1 },
    { name: 'fileBook', maxCount: 1 },
  ]),
  controller.update);

router.post('/books/:id/delete', controller.delete);

module.exports = router;
