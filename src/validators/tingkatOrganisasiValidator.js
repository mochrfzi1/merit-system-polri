const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateTingkatOrganisasi = [
  body('kode_tingkat').notEmpty().withMessage('kode_tingkat tidak boleh kosong'),
  body('nama_tingkat').notEmpty().withMessage('nama_tingkat tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateTingkatOrganisasi
};
