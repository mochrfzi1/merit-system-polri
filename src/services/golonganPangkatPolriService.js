const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM golongan_pangkat_polri');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM golongan_pangkat_polri WHERE id_golongan_polri = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data golongan_pangkat_polri tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO golongan_pangkat_polri (nama_golongan) VALUES (?)';
  const values = [data.nama_golongan];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data golongan_pangkat_polri");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'nama_golongan = ?';
  const query = `UPDATE golongan_pangkat_polri SET ${setQuery} WHERE id_golongan_polri = ?`;
  const values = [data.nama_golongan, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data golongan_pangkat_polri tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM golongan_pangkat_polri WHERE id_golongan_polri = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data golongan_pangkat_polri tidak ditemukan");
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
