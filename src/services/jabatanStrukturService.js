const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, j.nama_jabatan, e.nama_jabatan as nama_eselon, t.nama_tipe FROM jabatan_struktur main LEFT JOIN jabatan j ON main.id_jabatan = j.id_jabatan LEFT JOIN eselon e ON main.id_eselon = e.id_eselon LEFT JOIN tipe_organisasi t ON main.id_tipe = t.id_tipe');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, j.nama_jabatan, e.nama_jabatan as nama_eselon, t.nama_tipe FROM jabatan_struktur main LEFT JOIN jabatan j ON main.id_jabatan = j.id_jabatan LEFT JOIN eselon e ON main.id_eselon = e.id_eselon LEFT JOIN tipe_organisasi t ON main.id_tipe = t.id_tipe WHERE main.id_jabatan_struktur = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data jabatan_struktur tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO jabatan_struktur (id_jabatan, id_eselon, id_tipe) VALUES (?, ?, ?)';
  const values = [data.id_jabatan, data.id_eselon, data.id_tipe];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data jabatan_struktur");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_jabatan = ?, id_eselon = ?, id_tipe = ?';
  const query = `UPDATE jabatan_struktur SET ${setQuery} WHERE id_jabatan_struktur = ?`;
  const values = [data.id_jabatan, data.id_eselon, data.id_tipe, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data jabatan_struktur tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM jabatan_struktur WHERE id_jabatan_struktur = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data jabatan_struktur tidak ditemukan");
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
