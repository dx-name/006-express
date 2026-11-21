const booksDb = require('../db/books.db');

const booksService = {
  getAll() {
    return booksDb.getAll();
  },

  getById(id) {
    return booksDb.getById(id);
  },

  create({ title, description, authors, favorite, fileCover, fileName }) {
    if (!title) {
      throw new Error('Title is required');
    }

    return booksDb.create({ title, description, authors, favorite, fileCover, fileName });
  },

  update(id, data) {
    return booksDb.update(id, data);
  },

  delete(id) {
    return booksDb.delete(id);
  }
};

module.exports = booksService;
