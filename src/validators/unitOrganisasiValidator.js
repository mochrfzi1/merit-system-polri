const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateUnitOrganisasi = [
  body('kode_unit').notEmpty().withMessage('kode_unit tidak boleh kosong'),
  body('nama_unit').notEmpty().withMessage('nama_unit tidak boleh kosong'),
  body('id_tingkat').notEmpty().withMessage('id_tingkat tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateUnitOrganisasi
};
