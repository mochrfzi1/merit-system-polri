const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateLogin = [
  body('username').notEmpty().withMessage('Username tidak boleh kosong'),
  body('password').notEmpty().withMessage('Password tidak boleh kosong'),
  handleValidationErrors
];

const validateRegister = [
  body('nama').notEmpty().withMessage('Nama tidak boleh kosong'),
  body('username').notEmpty().withMessage('Username tidak boleh kosong'),
  body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
  body('id_role').isInt().withMessage('ID Role harus berupa angka'),
  handleValidationErrors
];

module.exports = {
  validateLogin,
  validateRegister
};
