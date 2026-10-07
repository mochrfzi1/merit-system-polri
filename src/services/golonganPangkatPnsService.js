const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM golongan_pangkat_pns');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM golongan_pangkat_pns WHERE id_golongan_pns = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data golongan_pangkat_pns tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO golongan_pangkat_pns (nama_golongan, usia_pensiun) VALUES (?,?)';
  const values = [data.nama_golongan,data.usia_pensiun];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data golongan_pangkat_pns");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'nama_golongan = ?, usia_pensiun = ?';
  const query = `UPDATE golongan_pangkat_pns SET ${setQuery} WHERE id_golongan_pns = ?`;
  const values = [data.nama_golongan, data.usia_pensiun, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data golongan_pangkat_pns tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM golongan_pangkat_pns WHERE id_golongan_pns = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data golongan_pangkat_pns tidak ditemukan");
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
