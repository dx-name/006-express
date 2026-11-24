
const express = require('express');
const booksRouter = require('./routes/books.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/books', booksRouter);

module.exports = app;
