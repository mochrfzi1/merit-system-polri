const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validatePangkatPns = [
  body('id_golongan_pns').notEmpty().withMessage('id_golongan_pns tidak boleh kosong'),
  body('ruang').notEmpty().withMessage('ruang tidak boleh kosong'),
  body('nama_pangkat').notEmpty().withMessage('nama_pangkat tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validatePangkatPns
};
