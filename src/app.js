const express = require('express');
const path = require('path');
const booksRouter = require('./routes/books.routes');
const viewsRouter = require('./routes/views.routes');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', viewsRouter);
app.use('/api/books', booksRouter);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

module.exports = app;
