const express = require('express');
const router = express.Router();
const tingkatOrganisasiController = require('../controllers/tingkatOrganisasiController');
const { validateTingkatOrganisasi } = require('../validators/tingkatOrganisasiValidator');

/**
 * @swagger
 * tags:
 *   name: TingkatOrganisasi
 *   description: API untuk tingkat_organisasi
 */

/**
 * @swagger
 * /api/tingkat_organisasi:
 *   get:
 *     summary: Mendapatkan semua data tingkat_organisasi
 *     tags: [TingkatOrganisasi]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', tingkatOrganisasiController.getAll);

/**
 * @swagger
 * /api/tingkat_organisasi/{id}:
 *   get:
 *     summary: Mendapatkan detail data tingkat_organisasi berdasarkan ID
 *     tags: [TingkatOrganisasi]
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
router.get('/:id', tingkatOrganisasiController.getById);

/**
 * @swagger
 * /api/tingkat_organisasi:
 *   post:
 *     summary: Tambah data tingkat_organisasi baru
 *     tags: [TingkatOrganisasi]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kode_tingkat:
 *                 type: string
 *               nama_tingkat:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateTingkatOrganisasi, tingkatOrganisasiController.create);

/**
 * @swagger
 * /api/tingkat_organisasi/{id}:
 *   put:
 *     summary: Ubah data tingkat_organisasi
 *     tags: [TingkatOrganisasi]
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
 *               kode_tingkat:
 *                 type: string
 *               nama_tingkat:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateTingkatOrganisasi, tingkatOrganisasiController.update);

/**
 * @swagger
 * /api/tingkat_organisasi/{id}:
 *   delete:
 *     summary: Hapus data tingkat_organisasi
 *     tags: [TingkatOrganisasi]
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
router.delete('/:id', tingkatOrganisasiController.remove);

module.exports = router;
