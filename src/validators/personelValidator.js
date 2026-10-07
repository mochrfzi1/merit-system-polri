const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validatePersonel = [
  body('nama').notEmpty().withMessage('Nama tidak boleh kosong'),
  body('jk').isIn(['pria', 'wanita']).withMessage('Jenis kelamin harus Pria atau Wanita'),
  body('tempat_lahir').notEmpty().withMessage('Tempat lahir tidak boleh kosong'),
  body('tanggal_lahir').isISO8601().toDate().withMessage('Format tanggal lahir tidak valid (gunakan YYYY-MM-DD)'),
  body('jenis_personel').isIn(['PNS', 'POLRI']).withMessage('Jenis personel harus PNS atau POLRI'),
  body('tanggal_masuk').isISO8601().toDate().withMessage('Format tanggal masuk tidak valid (gunakan YYYY-MM-DD)'),
  body('status_personel').isIn(['aktif','pensiun']).withMessage('Status pensiun hanya boleh diisi aktif atau pensiun'),
  handleValidationErrors
];

module.exports = {
  validatePersonel
};
