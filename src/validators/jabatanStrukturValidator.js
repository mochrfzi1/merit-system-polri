const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateJabatanStruktur = [
  body('id_jabatan').notEmpty().withMessage('id_jabatan tidak boleh kosong'),
  body('id_eselon').notEmpty().withMessage('id_eselon tidak boleh kosong'),
  body('id_tipe').notEmpty().withMessage('id_tipe tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateJabatanStruktur
};
