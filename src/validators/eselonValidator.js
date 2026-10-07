const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateEselon = [
  body('kode_eselon').notEmpty().withMessage('kode_eselon tidak boleh kosong'),
  body('nama_jabatan').notEmpty().withMessage('nama_jabatan tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateEselon
};
