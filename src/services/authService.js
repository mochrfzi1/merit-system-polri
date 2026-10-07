const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (username, password) => {
  const query = `
    SELECT u.*, r.nama as role_nama
    FROM user u
    LEFT JOIN roles r ON u.id_role = r.id_role
    WHERE u.username = ?
  `;
  const [rows] = await db.query(query, [username]);

  if (rows.length === 0) {
    throw new Error('Username atau password salah.');
  }

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Username atau password salah.');
  }

  const token = jwt.sign(
    { id_user: user.id_user, role: user.role_nama, username: user.username },
    process.env.JWT_SECRET || 'secretkey',
    { expiresIn: '1d' }
  );

  return { token, user: { id_user: user.id_user, nama: user.nama, role: user.role_nama } };
};

const register = async (data) => {
  const { nama, username, password, id_role } = data;

  const [existingUser] = await db.query('SELECT id_user FROM user WHERE username = ?', [username]);
  if (existingUser.length > 0) {
    throw new Error('Username sudah digunakan.');
  }

  const [existingRole] = await db.query('SELECT id_role FROM roles WHERE id_role = ?', [id_role]);
  if (existingRole.length === 0) {
    throw new Error('Role tidak ditemukan.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO user (nama, username, password, id_role) VALUES (?, ?, ?, ?)';
  
  const [result] = await db.query(query, [nama, username, hashedPassword, id_role]);
  
  return { id_user: result.insertId, nama, username };
};

module.exports = {
  login,
  register
};
