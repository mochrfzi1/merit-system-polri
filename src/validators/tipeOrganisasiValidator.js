const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateTipeOrganisasi = [
  body('id_tingkat').notEmpty().withMessage('id_tingkat tidak boleh kosong'),
  body('kode_tipe').notEmpty().withMessage('kode_tipe tidak boleh kosong'),
  body('nama_tipe').notEmpty().withMessage('nama_tipe tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateTipeOrganisasi
};
