const express = require('express');
const router = express.Router();
const jabatanStrukturController = require('../controllers/jabatanStrukturController');
const { validateJabatanStruktur } = require('../validators/jabatanStrukturValidator');

/**
 * @swagger
 * tags:
 *   name: JabatanStruktur
 *   description: API untuk jabatan_struktur
 */

/**
 * @swagger
 * /api/jabatan_struktur:
 *   get:
 *     summary: Mendapatkan semua data jabatan_struktur
 *     tags: [JabatanStruktur]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', jabatanStrukturController.getAll);

/**
 * @swagger
 * /api/jabatan_struktur/{id}:
 *   get:
 *     summary: Mendapatkan detail data jabatan_struktur berdasarkan ID
 *     tags: [JabatanStruktur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.get('/:id', jabatanStrukturController.getById);

/**
 * @swagger
 * /api/jabatan_struktur:
 *   post:
 *     summary: Tambah data jabatan_struktur baru
 *     tags: [JabatanStruktur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_jabatan:
 *                 type: integer
 *               id_eselon:
 *                 type: integer
 *               id_tipe:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateJabatanStruktur, jabatanStrukturController.create);

/**
 * @swagger
 * /api/jabatan_struktur/{id}:
 *   put:
 *     summary: Ubah data jabatan_struktur
 *     tags: [JabatanStruktur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_jabatan:
 *                 type: integer
 *               id_eselon:
 *                 type: integer
 *               id_tipe:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateJabatanStruktur, jabatanStrukturController.update);

/**
 * @swagger
 * /api/jabatan_struktur/{id}:
 *   delete:
 *     summary: Hapus data jabatan_struktur
 *     tags: [JabatanStruktur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.delete('/:id', jabatanStrukturController.remove);

module.exports = router;
