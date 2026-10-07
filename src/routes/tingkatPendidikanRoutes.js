const express = require('express');
const router = express.Router();
const tingkatPendidikanController = require('../controllers/tingkatPendidikanController');

/**
 * @swagger
 * tags:
 *   name: TingkatPendidikan
 *   description: API untuk tingkat_pendidikan
 */

/**
 * @swagger
 * /api/tingkat_pendidikan:
 *   get:
 *     summary: Mendapatkan semua data tingkat_pendidikan
 *     tags: [TingkatPendidikan]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', tingkatPendidikanController.getAll);

/**
 * @swagger
 * /api/tingkat_pendidikan/{id}:
 *   get:
 *     summary: Mendapatkan detail data tingkat_pendidikan berdasarkan ID
 *     tags: [TingkatPendidikan]
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
router.get('/:id', tingkatPendidikanController.getById);

/**
 * @swagger
 * /api/tingkat_pendidikan:
 *   post:
 *     summary: Tambah data tingkat_pendidikan baru
 *     tags: [TingkatPendidikan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kode_pendidikan:
 *                 type: string
 *               nama_pendidikan:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', tingkatPendidikanController.create);

/**
 * @swagger
 * /api/tingkat_pendidikan/{id}:
 *   put:
 *     summary: Ubah data tingkat_pendidikan
 *     tags: [TingkatPendidikan]
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
 *               kode_pendidikan:
 *                 type: string
 *               nama_pendidikan:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', tingkatPendidikanController.update);

/**
 * @swagger
 * /api/tingkat_pendidikan/{id}:
 *   delete:
 *     summary: Hapus data tingkat_pendidikan
 *     tags: [TingkatPendidikan]
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
router.delete('/:id', tingkatPendidikanController.remove);

module.exports = router;
