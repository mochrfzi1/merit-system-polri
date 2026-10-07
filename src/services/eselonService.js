const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM eselon');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM eselon WHERE id_eselon = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data eselon tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO eselon (kode_eselon, nama_eselon) VALUES (?, ?)';
  const values = [data.kode_eselon, data.nama_eselon];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data eselon");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'kode_eselon = ?, nama_eselon = ?';
  const query = `UPDATE eselon SET ${setQuery} WHERE id_eselon = ?`;
  const values = [data.kode_eselon, data.nama_eselon, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data eselon tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM eselon WHERE id_eselon = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data eselon tidak ditemukan");
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
