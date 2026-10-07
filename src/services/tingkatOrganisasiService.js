const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM tingkat_organisasi');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM tingkat_organisasi WHERE id_tingkat = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data tingkat_organisasi tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO tingkat_organisasi (kode_tingkat, nama_tingkat) VALUES (?, ?)';
  const values = [data.kode_tingkat, data.nama_tingkat];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data tingkat_organisasi");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'kode_tingkat = ?, nama_tingkat = ?';
  const query = `UPDATE tingkat_organisasi SET ${setQuery} WHERE id_tingkat = ?`;
  const values = [data.kode_tingkat, data.nama_tingkat, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data tingkat_organisasi tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM tingkat_organisasi WHERE id_tingkat = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data tingkat_organisasi tidak ditemukan");
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
