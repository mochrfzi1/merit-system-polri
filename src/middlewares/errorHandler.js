const errorHandler = (err, req, res, next) => {
  console.error('[GlobalErrorHandler]', err.message);

  let statusCode = 500;
  
  let message = err.message || 'Terjadi kesalahan internal pada server';

  if (err.message && err.message.toLowerCase().includes('tidak ditemukan')) {
    statusCode = 404;
  } else if (err.message && (err.message.toLowerCase().includes('gagal') || err.message.toLowerCase().includes('harus diisi') || err.message.toLowerCase().includes('sudah digunakan') || err.message.toLowerCase().includes('diperbolehkan'))) {
    statusCode = 400;
  } else if (err.message && err.message.toLowerCase().includes('salah')) {
    statusCode = 401;
  } else if (err.message && err.message.toLowerCase().includes('foreign key constraint fails')) {
    statusCode = 400;
    message = 'Data relasi yang Anda masukkan (ID) tidak valid atau tidak ditemukan di tabel referensi.';
  }

  res.status(statusCode).json({
    success: false,
    message: message
  });
};

module.exports = errorHandler;
