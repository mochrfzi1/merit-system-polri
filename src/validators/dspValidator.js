const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateDsp = [
  body('id_tipe').notEmpty().withMessage('id_tipe tidak boleh kosong'),
  body('id_unit').notEmpty().withMessage('id_unit tidak boleh kosong'),
  body('id_jabatan_struktur').notEmpty().withMessage('id_jabatan_struktur tidak boleh kosong'),
  body('jumlah_dsp').notEmpty().withMessage('jumlah_dsp tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateDsp
};
