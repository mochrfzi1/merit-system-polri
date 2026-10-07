const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateSatker = [
  body('nama_satker').notEmpty().withMessage('nama_satker tidak boleh kosong'),
  body('id_tingkat').notEmpty().withMessage('id_tingkat tidak boleh kosong'),
  body('id_tipe').notEmpty().withMessage('id_tipe tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateSatker
};
