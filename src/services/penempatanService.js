const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, p.nama as nama_personel, s.nama_satker, u.nama_unit FROM penempatan main LEFT JOIN personel p ON main.id_personel = p.id_personel LEFT JOIN satker s ON main.id_satker = s.id_satker LEFT JOIN unit_organisasi u ON main.id_unit = u.id_unit');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, p.nama as nama_personel, s.nama_satker, u.nama_unit FROM penempatan main LEFT JOIN personel p ON main.id_personel = p.id_personel LEFT JOIN satker s ON main.id_satker = s.id_satker LEFT JOIN unit_organisasi u ON main.id_unit = u.id_unit WHERE main.id_penempatan = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data penempatan tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO penempatan (id_personel, id_satker, id_unit, id_jabatan_struktur, tmt_mulai, tmt_selesai, status_penempatan) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [data.id_personel, data.id_satker, data.id_unit, data.id_jabatan_struktur, data.tmt_mulai, data.tmt_selesai, data.status_penempatan];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data penempatan");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_personel = ?, id_satker = ?, id_unit = ?, id_jabatan_struktur = ?, tmt_mulai = ?, tmt_selesai = ?, status_penempatan = ?';
  const query = `UPDATE penempatan SET ${setQuery} WHERE id_penempatan = ?`;
  const values = [data.id_personel, data.id_satker, data.id_unit, data.id_jabatan_struktur, data.tmt_mulai, data.tmt_selesai, data.status_penempatan, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data penempatan tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM penempatan WHERE id_penempatan = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data penempatan tidak ditemukan");
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
