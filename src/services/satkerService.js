const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, t.nama_tingkat, ti.nama_tipe FROM satker main LEFT JOIN tingkat_organisasi t ON main.id_tingkat = t.id_tingkat LEFT JOIN tipe_organisasi ti ON main.id_tipe = ti.id_tipe');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, t.nama_tingkat, ti.nama_tipe FROM satker main LEFT JOIN tingkat_organisasi t ON main.id_tingkat = t.id_tingkat LEFT JOIN tipe_organisasi ti ON main.id_tipe = ti.id_tipe WHERE main.id_satker = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data satker tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO satker (nama_satker, id_tingkat, id_tipe) VALUES (?, ?, ?)';
  const values = [data.nama_satker, data.id_tingkat, data.id_tipe];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data satker");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'nama_satker = ?, id_tingkat = ?, id_tipe = ?';
  const query = `UPDATE satker SET ${setQuery} WHERE id_satker = ?`;
  const values = [data.nama_satker, data.id_tingkat, data.id_tipe, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data satker tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM satker WHERE id_satker = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data satker tidak ditemukan");
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
