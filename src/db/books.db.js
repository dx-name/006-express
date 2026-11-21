const Book = require('../domain/book');

let books = [];

const booksDb = {
  getAll() {
    return books;
  },

  getById(id) {
    return books.find(book => book.id === id) || null;
  },

  create(data) {
    const book = new Book(data);
    books.push(book);
    return book;
  },

  update(id, data) {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) return null;

    books[index] = new Book({ ...books[index], ...data, id });
    return books[index];
  },

  delete(id) {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) return false;

    books.splice(index, 1);
    return true;
  }
};

module.exports = booksDb;
