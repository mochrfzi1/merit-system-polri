const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, pp.nama_pangkat as nama_pangkat_polri, pn.nama_pangkat as nama_pangkat_pns FROM jabatan_pangkat main LEFT JOIN pangkat_polri pp ON main.id_pangkat_polri = pp.id_pangkat_polri LEFT JOIN pangkat_pns pn ON main.id_pangkat_pns = pn.id_pangkat_pns');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, pp.nama_pangkat as nama_pangkat_polri, pn.nama_pangkat as nama_pangkat_pns FROM jabatan_pangkat main LEFT JOIN pangkat_polri pp ON main.id_pangkat_polri = pp.id_pangkat_polri LEFT JOIN pangkat_pns pn ON main.id_pangkat_pns = pn.id_pangkat_pns WHERE main.id_jabatan_pangkat = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data jabatan_pangkat tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO jabatan_pangkat (id_jabatan_struktur, jenis_personel, id_pangkat_polri, id_pangkat_pns) VALUES (?, ?, ?, ?)';
  const values = [data.id_jabatan_struktur, data.jenis_personel, data.id_pangkat_polri, data.id_pangkat_pns];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data jabatan_pangkat");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_jabatan_struktur = ?, jenis_personel = ?, id_pangkat_polri = ?, id_pangkat_pns = ?';
  const query = `UPDATE jabatan_pangkat SET ${setQuery} WHERE id_jabatan_pangkat = ?`;
  const values = [data.id_jabatan_struktur, data.jenis_personel, data.id_pangkat_polri, data.id_pangkat_pns, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data jabatan_pangkat tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM jabatan_pangkat WHERE id_jabatan_pangkat = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data jabatan_pangkat tidak ditemukan");
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
