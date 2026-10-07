const db = require('../config/db');

const getAllPersonel = async () => {
  const [rows] = await db.query('SELECT * FROM personel');
  return rows;
};

const getPersonelById = async (id) => {
  const [rows] = await db.query('SELECT * FROM personel WHERE id_personel = ?', [id]);
  const data = rows[0];
  
  if (!data) {
    throw new Error("Data personel tidak ditemukan");
  }
  
  return data;
};

const createPersonel = async (data) => {
  const query = `
    INSERT INTO personel (nama, jk, tempat_lahir, tanggal_lahir, jenis_personel, tanggal_masuk, status_personel)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  
  const [result] = await db.query(query, [
    data.nama, 
    data.jk, 
    data.tempat_lahir, 
    data.tanggal_lahir, 
    data.jenis_personel, 
    data.tanggal_masuk, 
    data.status_personel
  ]);

  if (!result.insertId) {
    throw new Error("Gagal menambahkan data personel");
  }

  return result.insertId;
};

const updatePersonel = async (id, data) => {
  const query = `
    UPDATE personel 
    SET nama = ?, jk = ?, tempat_lahir = ?, tanggal_lahir = ?, jenis_personel = ?, tanggal_masuk = ?, status_personel = ?
    WHERE id_personel = ?
  `;
  
  const [result] = await db.query(query, [
    data.nama, 
    data.jk, 
    data.tempat_lahir, 
    data.tanggal_lahir, 
    data.jenis_personel, 
    data.tanggal_masuk, 
    data.status_personel, 
    id
  ]);

  if (result.affectedRows === 0) {
    throw new Error("Data personel tidak ditemukan atau tidak ada perubahan");
  }

  return true;
};

const deletePersonel = async (id) => {
  const query = 'DELETE FROM personel WHERE id_personel = ?';
  const [result] = await db.query(query, [id]);
  
  if (result.affectedRows === 0) {
    throw new Error("Data personel tidak ditemukan");
  }
  
  return true;
};

module.exports = {
  getAllPersonel,
  getPersonelById,
  createPersonel,
  updatePersonel,
  deletePersonel
};
