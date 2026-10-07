const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validatePenempatan = [
  body('id_personel').notEmpty().withMessage('id_personel tidak boleh kosong'),
  body('id_satker').notEmpty().withMessage('id_satker tidak boleh kosong'),
  body('id_unit').notEmpty().withMessage('id_unit tidak boleh kosong'),
  body('id_jabatan_struktur').notEmpty().withMessage('id_jabatan_struktur tidak boleh kosong'),
  body('tmt_mulai').notEmpty().withMessage('tmt_mulai tidak boleh kosong'),
  body('tmt_selesai').notEmpty().withMessage('tmt_selesai tidak boleh kosong'),
  body('status_penempatan').notEmpty().withMessage('status_penempatan tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validatePenempatan
};
