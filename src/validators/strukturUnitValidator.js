const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateStrukturUnit = [
  body('id_satker').notEmpty().withMessage('id_satker tidak boleh kosong'),
  body('id_unit').notEmpty().withMessage('id_unit tidak boleh kosong'),
  body('id_unit_parent').notEmpty().withMessage('id_unit_parent tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateStrukturUnit
};
