const express = require('express');
const booksService = require('../services/books.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(booksService.getAll());
});

router.get('/:id', (req, res) => {
  const book = booksService.getById(req.params.id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

router.post('/', (req, res) => {
  try {
    const book = booksService.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', (req, res) => {
  const book = booksService.update(req.params.id, req.body);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

router.delete('/:id', (req, res) => {
  const deleted = booksService.delete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.send('ok');
});

module.exports = router;
