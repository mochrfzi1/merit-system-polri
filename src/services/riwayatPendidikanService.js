const db = require('../config/db');

const getAll = async () => {
  const query = `
    SELECT r.*, p.nama as nama_personel, t.nama_pendidikan 
    FROM riwayat_pendidikan r
    LEFT JOIN personel p ON r.id_personel = p.id_personel
    LEFT JOIN tingkat_pendidikan t ON r.id_tingkat_pendidikan = t.id_tingkat_pendidikan
  `;
  const [rows] = await db.query(query);
  return rows;
};

const getById = async (id) => {
  const query = `
    SELECT r.*, p.nama as nama_personel, t.nama_pendidikan 
    FROM riwayat_pendidikan r
    LEFT JOIN personel p ON r.id_personel = p.id_personel
    LEFT JOIN tingkat_pendidikan t ON r.id_tingkat_pendidikan = t.id_tingkat_pendidikan
    WHERE r.id_riwayat_pendidikan = ?
  `;
  const [rows] = await db.query(query, [id]);
  const data = rows[0];
  if (!data) throw new Error("Data riwayat_pendidikan tidak ditemukan");
  return data;
};

const create = async (data) => {
  const query = 'INSERT INTO riwayat_pendidikan (id_personel, id_tingkat_pendidikan, nama_institusi, jurusan, tahun_masuk, tahun_lulus, nomor_ijazah) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [data.id_personel, data.id_tingkat_pendidikan, data.nama_institusi, data.jurusan, data.tahun_masuk, data.tahun_lulus, data.nomor_ijazah];
  const [result] = await db.query(query, values);
  if (!result.insertId) throw new Error("Gagal menambahkan data riwayat_pendidikan");
  return result.insertId;
};

const update = async (id, data) => {
  const query = 'UPDATE riwayat_pendidikan SET id_personel = ?, id_tingkat_pendidikan = ?, nama_institusi = ?, jurusan = ?, tahun_masuk = ?, tahun_lulus = ?, nomor_ijazah = ? WHERE id_riwayat_pendidikan = ?';
  const values = [data.id_personel, data.id_tingkat_pendidikan, data.nama_institusi, data.jurusan, data.tahun_masuk, data.tahun_lulus, data.nomor_ijazah, id];
  const [result] = await db.query(query, values);
  if (result.affectedRows === 0) throw new Error("Data riwayat_pendidikan tidak ditemukan atau tidak ada perubahan");
  return true;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM riwayat_pendidikan WHERE id_riwayat_pendidikan = ?', [id]);
  if (result.affectedRows === 0) throw new Error("Data riwayat_pendidikan tidak ditemukan");
  return true;
};

module.exports = { getAll, getById, create, update, remove };
