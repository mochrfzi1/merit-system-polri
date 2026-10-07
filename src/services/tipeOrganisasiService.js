const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, t.nama_tingkat FROM tipe_organisasi main LEFT JOIN tingkat_organisasi t ON main.id_tingkat = t.id_tingkat');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, t.nama_tingkat FROM tipe_organisasi main LEFT JOIN tingkat_organisasi t ON main.id_tingkat = t.id_tingkat WHERE main.id_tipe = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data tipe_organisasi tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO tipe_organisasi (id_tingkat, kode_tipe, nama_tipe) VALUES (?, ?, ?)';
  const values = [data.id_tingkat, data.kode_tipe, data.nama_tipe];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data tipe_organisasi");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_tingkat = ?, kode_tipe = ?, nama_tipe = ?';
  const query = `UPDATE tipe_organisasi SET ${setQuery} WHERE id_tipe = ?`;
  const values = [data.id_tingkat, data.kode_tipe, data.nama_tipe, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data tipe_organisasi tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM tipe_organisasi WHERE id_tipe = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data tipe_organisasi tidak ditemukan");
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
