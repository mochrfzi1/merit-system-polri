const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, t.nama_tingkat FROM unit_organisasi main LEFT JOIN tingkat_organisasi t ON main.id_tingkat = t.id_tingkat');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, t.nama_tingkat FROM unit_organisasi main LEFT JOIN tingkat_organisasi t ON main.id_tingkat = t.id_tingkat WHERE main.id_unit = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data unit_organisasi tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO unit_organisasi (kode_unit, nama_unit, id_tingkat) VALUES (?, ?, ?)';
  const values = [data.kode_unit, data.nama_unit, data.id_tingkat];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data unit_organisasi");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'kode_unit = ?, nama_unit = ?, id_tingkat = ?';
  const query = `UPDATE unit_organisasi SET ${setQuery} WHERE id_unit = ?`;
  const values = [data.kode_unit, data.nama_unit, data.id_tingkat, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data unit_organisasi tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM unit_organisasi WHERE id_unit = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data unit_organisasi tidak ditemukan");
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
