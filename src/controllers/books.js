const Book = require('../models/books');
const path = require('path');
const books = [];

exports.getBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Книга не найдена' });
  res.json(book);
};

exports.createBook = (req, res) => {
  const { title, description, authors, favorite, fileCover, fileName } = req.body;
  const book = new Book(
    title,
    description,
    authors,
    favorite === 'true',
    fileCover,
    fileName,
    req.file ? req.file.filename : '',
  );
  books.push(book);
  res.status(201).json(book);
};

exports.updateBook = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Книга не найдена' });
  const { title, description, authors, favorite, fileCover, fileName } = req.body;
  if (title) book.title = title;
  if (description) book.description = description;
  if (authors) book.authors = authors;
  if (favorite) book.favorite = favorite === 'true';
  if (fileCover) book.fileCover = fileCover;
  if (fileName) book.fileName = fileName;
  if (req.file) book.fileBook = req.file.filename;
  res.json(book);
};

exports.deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Книга не найдена' });
  books.splice(index, 1);
  res.json({ message: 'Книга удалена' });
};

exports.downloadBook = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book || !book.fileBook) {
    return res.status(404).json({ message: 'Файл книги не найден' });
  }
  const filePath = path.join(__dirname, '../public/books', book.fileBook);
  res.download(filePath, book.fileName || book.fileBook, (err) => {
    if (err) res.status(500).json({ message: 'Ошибка при скачивании файла' });
  });
};
