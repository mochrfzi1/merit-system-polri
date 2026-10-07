const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validatePangkatPolri = [
  body('id_golongan_polri').notEmpty().withMessage('id_golongan_polri tidak boleh kosong'),
  body('kode_pangkat').notEmpty().withMessage('kode_pangkat tidak boleh kosong'),
  body('nama_pangkat').notEmpty().withMessage('nama_pangkat tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validatePangkatPolri
};
