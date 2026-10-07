const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateDspPangkat = [
  body('id_dsp').notEmpty().withMessage('id_dsp tidak boleh kosong'),
  body('jenis_personel').notEmpty().withMessage('jenis_personel tidak boleh kosong'),
  body('id_pangkat_polri').notEmpty().withMessage('id_pangkat_polri tidak boleh kosong'),
  body('id_pangkat_pns').notEmpty().withMessage('id_pangkat_pns tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateDspPangkat
};
