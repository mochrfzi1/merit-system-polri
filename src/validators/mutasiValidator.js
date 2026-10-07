const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateMutasi = [
  body('id_personel').notEmpty().withMessage('id_personel tidak boleh kosong'),
  body('nomor_sk').notEmpty().withMessage('nomor_sk tidak boleh kosong'),
  body('tanggal_sk').notEmpty().withMessage('tanggal_sk tidak boleh kosong'),
  body('tmt').notEmpty().withMessage('tmt tidak boleh kosong'),
  body('id_satker_asal').notEmpty().withMessage('id_satker_asal tidak boleh kosong'),
  body('id_unit_asal').notEmpty().withMessage('id_unit_asal tidak boleh kosong'),
  body('id_jabatan_asal').notEmpty().withMessage('id_jabatan_asal tidak boleh kosong'),
  body('id_satker_tujuan').notEmpty().withMessage('id_satker_tujuan tidak boleh kosong'),
  body('id_unit_tujuan').notEmpty().withMessage('id_unit_tujuan tidak boleh kosong'),
  body('id_jabatan_tujuan').notEmpty().withMessage('id_jabatan_tujuan tidak boleh kosong'),
  body('status_mutasi').notEmpty().withMessage('status_mutasi tidak boleh kosong'),
  body('keterangan').notEmpty().withMessage('keterangan tidak boleh kosong'),
  handleValidationErrors
];

module.exports = {
  validateMutasi
};
