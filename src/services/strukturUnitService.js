const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, s.nama_satker, u.nama_unit, up.nama_unit as nama_unit_parent FROM struktur_unit main LEFT JOIN satker s ON main.id_satker = s.id_satker LEFT JOIN unit_organisasi u ON main.id_unit = u.id_unit LEFT JOIN unit_organisasi up ON main.id_unit_parent = up.id_unit_parent');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, s.nama_satker, u.nama_unit, up.nama_unit as nama_unit_parent FROM struktur_unit main LEFT JOIN satker s ON main.id_satker = s.id_satker LEFT JOIN unit_organisasi u ON main.id_unit = u.id_unit LEFT JOIN unit_organisasi up ON main.id_unit_parent = up.id_unit_parent WHERE main.id_struktur = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data struktur_unit tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO struktur_unit (id_satker, id_unit, id_unit_parent) VALUES (?, ?, ?)';
  const values = [data.id_satker, data.id_unit, data.id_unit_parent];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data struktur_unit");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_satker = ?, id_unit = ?, id_unit_parent = ?';
  const query = `UPDATE struktur_unit SET ${setQuery} WHERE id_struktur = ?`;
  const values = [data.id_satker, data.id_unit, data.id_unit_parent, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data struktur_unit tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM struktur_unit WHERE id_struktur = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data struktur_unit tidak ditemukan");
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
