const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, g.nama_golongan FROM pangkat_pns main LEFT JOIN golongan_pangkat_pns g ON main.id_golongan_pns = g.id_golongan_pns');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, g.nama_golongan FROM pangkat_pns main LEFT JOIN golongan_pangkat_pns g ON main.id_golongan_pns = g.id_golongan_pns WHERE main.id_pangkat_pns = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data pangkat_pns tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO pangkat_pns (id_golongan_pns, ruang, nama_pangkat) VALUES (?, ?, ?)';
  const values = [data.id_golongan_pns, data.ruang, data.nama_pangkat];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data pangkat_pns");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_golongan_pns = ?, ruang = ?, nama_pangkat = ?';
  const query = `UPDATE pangkat_pns SET ${setQuery} WHERE id_pangkat_pns = ?`;
  const values = [data.id_golongan_pns, data.ruang, data.nama_pangkat, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data pangkat_pns tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM pangkat_pns WHERE id_pangkat_pns = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data pangkat_pns tidak ditemukan");
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
