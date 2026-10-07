const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer"

  if (token == null) {
    return res.status(401).json({ error: 'Token otorisasi tidak ditemukan.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token tidak valid atau sudah kadaluarsa.' });
    }
    req.user = user;
    next();
  });
};

const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin_ssdm') {
    return res.status(403).json({ error: 'Akses ditolak. Membutuhkan hak akses admin.' });
  }
  next();
};

const requireRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Akses ditolak. Peran pengguna tidak diizinkan.' });
    }
    next();
  };
};

module.exports = {
  authenticateToken,
  requireAdmin,
  requireRole
};
