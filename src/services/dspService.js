const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, t.nama_tipe, u.nama_unit FROM dsp main LEFT JOIN tipe_organisasi t ON main.id_tipe = t.id_tipe LEFT JOIN unit_organisasi u ON main.id_unit = u.id_unit');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, t.nama_tipe, u.nama_unit FROM dsp main LEFT JOIN tipe_organisasi t ON main.id_tipe = t.id_tipe LEFT JOIN unit_organisasi u ON main.id_unit = u.id_unit WHERE main.id_dsp = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data dsp tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO dsp (id_tipe, id_unit, id_jabatan_struktur, jumlah_dsp) VALUES (?, ?, ?, ?)';
  const values = [data.id_tipe, data.id_unit, data.id_jabatan_struktur, data.jumlah_dsp];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data dsp");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_tipe = ?, id_unit = ?, id_jabatan_struktur = ?, jumlah_dsp = ?';
  const query = `UPDATE dsp SET ${setQuery} WHERE id_dsp = ?`;
  const values = [data.id_tipe, data.id_unit, data.id_jabatan_struktur, data.jumlah_dsp, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data dsp tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM dsp WHERE id_dsp = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data dsp tidak ditemukan");
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
