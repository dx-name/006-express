const multer = require('multer');
const path = require('path');

const BOOK_EXT = ['.pdf', '.epub', '.fb2', '.txt', '.mobi'];
const COVER_EXT = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../uploads/books'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const allowed = file.fieldname === 'fileCover' ? COVER_EXT : BOOK_EXT;
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(
        file.fieldname === 'fileCover'
          ? 'Обложка должна быть изображением: jpg, png, gif, webp'
          : 'Файл книги: допустимые форматы pdf, epub, fb2, txt, mobi'
      ));
    }
  },
});

module.exports = upload;
