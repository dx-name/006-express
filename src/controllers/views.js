const booksService = require('../services/books.service');

exports.index = (req, res) => {
  const books = booksService.getAll();
  res.render('index', { books, title: 'Библиотека' });
};

exports.view = (req, res, next) => {
  try {
    const book = booksService.getById(req.params.id);
    res.render('view', { book, title: book.title });
  } catch (error) {
    next(error);
  }
};

exports.createForm = (req, res) => {
  res.render('create', { title: 'Новая книга' });
};

exports.create = async (req, res, next) => {
  try {
    const book = await booksService.create(req.body, req.files);
    res.redirect(`/books/${book.id}`);
  } catch (error) {
    next(error);
  }
};

exports.updateForm = (req, res, next) => {
  try {
    const book = booksService.getById(req.params.id);
    res.render('update', { book, title: 'Редактирование' });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    await booksService.update(req.params.id, req.body, req.files);
    res.redirect(`/books/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

exports.delete = (req, res) => {
  booksService.delete(req.params.id);
  res.redirect('/books');
};
