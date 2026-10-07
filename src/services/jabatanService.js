const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM jabatan');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM jabatan WHERE id_jabatan = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data jabatan tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO jabatan (kode_jabatan, nama_jabatan) VALUES (?, ?)';
  const values = [data.kode_jabatan, data.nama_jabatan];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data jabatan");
  }
  
  return result;
};

const update = async (id, data) => {
  const setQuery = 'kode_jabatan = ?, nama_jabatan = ?';
  const query = `UPDATE jabatan SET ${setQuery} WHERE id_jabatan = ?`;
  const values = [data.kode_jabatan, data.nama_jabatan, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data jabatan tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM jabatan WHERE id_jabatan = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data jabatan tidak ditemukan");
  }
  
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
