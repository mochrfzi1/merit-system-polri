const db = require("../config/db");

const create = async (data) => {
  const validRoles = ['admin', 'operator'];
  if (!validRoles.includes(data.toLowerCase())) {
    throw new Error('Role yang diperbolehkan hanya admin dan operator');
  }

  const connection = await db.getConnection();
  try {
    const [result] = await connection.query(
      "INSERT INTO roles (nama) VALUES (?)",
      [data.toLowerCase()],
    );
    await connection.commit();
    return data.toLowerCase();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

const getAll = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM roles");
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getById = async (id) => {
  const [rows] = await db.query("SELECT * FROM roles WHERE id_role = ?", [id]);
  return rows[0];
};

const update = async (id, data) => {
  const validRoles = ['admin', 'operator'];
  if (!validRoles.includes(data.toLowerCase())) {
    throw new Error('Role yang diperbolehkan hanya admin dan operator');
  }

  const [rows] = await db.query("UPDATE roles SET nama = ? WHERE id_role = ?", [
    data.toLowerCase(),
    id,
  ]);
  if (rows.affectedRows === 0) {
    throw new Error('Role tidak ditemukan');
  }
  return true;
};

const deleteRole = async (id) => {
  const [existingRole] = await db.query('SELECT * FROM roles WHERE id_role = ?', [id]);
  if (existingRole.length === 0) {
    throw new Error('Role tidak ditemukan');
  }

  const [rows] = await db.query("DELETE FROM roles WHERE id_role = ?", [id]);
  return rows;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteRole,
};
