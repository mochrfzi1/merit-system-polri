const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, g.nama_golongan FROM pangkat_polri main LEFT JOIN golongan_pangkat_polri g ON main.id_golongan_polri = g.id_golongan_polri');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, g.nama_golongan FROM pangkat_polri main LEFT JOIN golongan_pangkat_polri g ON main.id_golongan_polri = g.id_golongan_polri WHERE main.id_pangkat_polri = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data pangkat_polri tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO pangkat_polri (id_golongan_polri, kode_pangkat, nama_pangkat) VALUES (?, ?, ?)';
  const values = [data.id_golongan_polri, data.kode_pangkat, data.nama_pangkat];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data pangkat_polri");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_golongan_polri = ?, kode_pangkat = ?, nama_pangkat = ?';
  const query = `UPDATE pangkat_polri SET ${setQuery} WHERE id_pangkat_polri = ?`;
  const values = [data.id_golongan_polri, data.kode_pangkat, data.nama_pangkat, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data pangkat_polri tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM pangkat_polri WHERE id_pangkat_polri = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data pangkat_polri tidak ditemukan");
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
