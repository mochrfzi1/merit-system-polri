const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateGolonganPangkatPolri = [
  body('nama_golongan').notEmpty().withMessage('nama_golongan tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateGolonganPangkatPolri
};
