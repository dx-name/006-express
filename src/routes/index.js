const express = require('express');

const booksRoutes = require('./books.routes');
const userRoutes = require('./user.routes');

const router = express.Router();

router.use('/books', booksRoutes);
router.use('/user', userRoutes);

module.exports = router;
