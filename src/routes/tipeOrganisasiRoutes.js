const express = require('express');
const router = express.Router();
const tipeOrganisasiController = require('../controllers/tipeOrganisasiController');
const { validateTipeOrganisasi } = require('../validators/tipeOrganisasiValidator');

/**
 * @swagger
 * tags:
 *   name: TipeOrganisasi
 *   description: API untuk tipe_organisasi
 */

/**
 * @swagger
 * /api/tipe_organisasi:
 *   get:
 *     summary: Mendapatkan semua data tipe_organisasi
 *     tags: [TipeOrganisasi]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', tipeOrganisasiController.getAll);

/**
 * @swagger
 * /api/tipe_organisasi/{id}:
 *   get:
 *     summary: Mendapatkan detail data tipe_organisasi berdasarkan ID
 *     tags: [TipeOrganisasi]
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
router.get('/:id', tipeOrganisasiController.getById);

/**
 * @swagger
 * /api/tipe_organisasi:
 *   post:
 *     summary: Tambah data tipe_organisasi baru
 *     tags: [TipeOrganisasi]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_tingkat:
 *                 type: integer
 *               kode_tipe:
 *                 type: string
 *               nama_tipe:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateTipeOrganisasi, tipeOrganisasiController.create);

/**
 * @swagger
 * /api/tipe_organisasi/{id}:
 *   put:
 *     summary: Ubah data tipe_organisasi
 *     tags: [TipeOrganisasi]
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
 *               id_tingkat:
 *                 type: integer
 *               kode_tipe:
 *                 type: string
 *               nama_tipe:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateTipeOrganisasi, tipeOrganisasiController.update);

/**
 * @swagger
 * /api/tipe_organisasi/{id}:
 *   delete:
 *     summary: Hapus data tipe_organisasi
 *     tags: [TipeOrganisasi]
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
router.delete('/:id', tipeOrganisasiController.remove);

module.exports = router;
