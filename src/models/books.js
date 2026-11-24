class Book {
  constructor(
    title = '',
    description = '',
    authors = '',
    favorite = false,
    fileCover = '',
    fileName = '',
    fileBook = '', // путь к загруженному файлу
    id = crypto.randomUUID(),
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.fileBook = fileBook;
  }
}

module.exports = Book;
