const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM tingkat_pendidikan');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM tingkat_pendidikan WHERE id_tingkat_pendidikan = ?', [id]);
  const data = rows[0];
  if (!data) throw new Error("Data tingkat_pendidikan tidak ditemukan");
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO tingkat_pendidikan (kode_pendidikan, nama_pendidikan) VALUES (?, ?)';
  const [result] = await db.query(query, [data.kode_pendidikan, data.nama_pendidikan]);
  if (!result.insertId) throw new Error("Gagal menambahkan data tingkat_pendidikan");
  return result.insertId;
};

const update = async (id, data) => {
  const query = 'UPDATE tingkat_pendidikan SET kode_pendidikan = ?, nama_pendidikan = ? WHERE id_tingkat_pendidikan = ?';
  const [result] = await db.query(query, [data.kode_pendidikan, data.nama_pendidikan, id]);
  if (result.affectedRows === 0) throw new Error("Data tingkat_pendidikan tidak ditemukan atau tidak ada perubahan");
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM tingkat_pendidikan WHERE id_tingkat_pendidikan = ?', [id]);
  if (result.affectedRows === 0) throw new Error("Data tingkat_pendidikan tidak ditemukan");
  return true;
};

module.exports = { getAll, getById, create, update, remove };
