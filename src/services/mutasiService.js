const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT main.*, p.nama as nama_personel, sa.nama_satker as nama_satker_asal, ua.nama_unit as nama_unit_asal, st.nama_satker as nama_satker_tujuan, ut.nama_unit as nama_unit_tujuan FROM mutasi main LEFT JOIN personel p ON main.id_personel = p.id_personel LEFT JOIN satker sa ON main.id_satker_asal = sa.id_satker_asal LEFT JOIN unit_organisasi ua ON main.id_unit_asal = ua.id_unit_asal LEFT JOIN satker st ON main.id_satker_tujuan = st.id_satker_tujuan LEFT JOIN unit_organisasi ut ON main.id_unit_tujuan = ut.id_unit_tujuan');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT main.*, p.nama as nama_personel, sa.nama_satker as nama_satker_asal, ua.nama_unit as nama_unit_asal, st.nama_satker as nama_satker_tujuan, ut.nama_unit as nama_unit_tujuan FROM mutasi main LEFT JOIN personel p ON main.id_personel = p.id_personel LEFT JOIN satker sa ON main.id_satker_asal = sa.id_satker_asal LEFT JOIN unit_organisasi ua ON main.id_unit_asal = ua.id_unit_asal LEFT JOIN satker st ON main.id_satker_tujuan = st.id_satker_tujuan LEFT JOIN unit_organisasi ut ON main.id_unit_tujuan = ut.id_unit_tujuan WHERE main.id_mutasi = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data mutasi tidak ditemukan");
  }
  
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO mutasi (id_personel, nomor_sk, tanggal_sk, tmt, id_satker_asal, id_unit_asal, id_jabatan_asal, id_satker_tujuan, id_unit_tujuan, id_jabatan_tujuan, status_mutasi, keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [data.id_personel, data.nomor_sk, data.tanggal_sk, data.tmt, data.id_satker_asal, data.id_unit_asal, data.id_jabatan_asal, data.id_satker_tujuan, data.id_unit_tujuan, data.id_jabatan_tujuan, data.status_mutasi, data.keterangan];
  const [result] = await db.query(query, values);
  
  if (!result.insertId) {
    throw new Error("Gagal menambahkan data mutasi");
  }
  
  return result.insertId;
};

const update = async (id, data) => {
  const setQuery = 'id_personel = ?, nomor_sk = ?, tanggal_sk = ?, tmt = ?, id_satker_asal = ?, id_unit_asal = ?, id_jabatan_asal = ?, id_satker_tujuan = ?, id_unit_tujuan = ?, id_jabatan_tujuan = ?, status_mutasi = ?, keterangan = ?';
  const query = `UPDATE mutasi SET ${setQuery} WHERE id_mutasi = ?`;
  const values = [data.id_personel, data.nomor_sk, data.tanggal_sk, data.tmt, data.id_satker_asal, data.id_unit_asal, data.id_jabatan_asal, data.id_satker_tujuan, data.id_unit_tujuan, data.id_jabatan_tujuan, data.status_mutasi, data.keterangan, id];
  const [result] = await db.query(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error("Data mutasi tidak ditemukan atau tidak ada perubahan");
  }
  
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM mutasi WHERE id_mutasi = ?', [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data mutasi tidak ditemukan");
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
