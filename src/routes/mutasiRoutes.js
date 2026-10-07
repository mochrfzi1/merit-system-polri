const express = require('express');
const router = express.Router();
const mutasiController = require('../controllers/mutasiController');
const { validateMutasi } = require('../validators/mutasiValidator');

/**
 * @swagger
 * tags:
 *   name: Mutasi
 *   description: API untuk mutasi
 */

/**
 * @swagger
 * /api/mutasi:
 *   get:
 *     summary: Mendapatkan semua data mutasi
 *     tags: [Mutasi]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', mutasiController.getAll);

/**
 * @swagger
 * /api/mutasi/{id}:
 *   get:
 *     summary: Mendapatkan detail data mutasi berdasarkan ID
 *     tags: [Mutasi]
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
router.get('/:id', mutasiController.getById);

/**
 * @swagger
 * /api/mutasi:
 *   post:
 *     summary: Tambah data mutasi baru
 *     tags: [Mutasi]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_personel:
 *                 type: integer
 *               nomor_sk:
 *                 type: string
 *               tanggal_sk:
 *                 type: string
 *               tmt:
 *                 type: string
 *               id_satker_asal:
 *                 type: integer
 *               id_unit_asal:
 *                 type: integer
 *               id_jabatan_asal:
 *                 type: integer
 *               id_satker_tujuan:
 *                 type: integer
 *               id_unit_tujuan:
 *                 type: integer
 *               id_jabatan_tujuan:
 *                 type: integer
 *               status_mutasi:
 *                 type: string
 *               keterangan:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateMutasi, mutasiController.create);

/**
 * @swagger
 * /api/mutasi/{id}:
 *   put:
 *     summary: Ubah data mutasi
 *     tags: [Mutasi]
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
 *               id_personel:
 *                 type: integer
 *               nomor_sk:
 *                 type: string
 *               tanggal_sk:
 *                 type: string
 *               tmt:
 *                 type: string
 *               id_satker_asal:
 *                 type: integer
 *               id_unit_asal:
 *                 type: integer
 *               id_jabatan_asal:
 *                 type: integer
 *               id_satker_tujuan:
 *                 type: integer
 *               id_unit_tujuan:
 *                 type: integer
 *               id_jabatan_tujuan:
 *                 type: integer
 *               status_mutasi:
 *                 type: string
 *               keterangan:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateMutasi, mutasiController.update);

/**
 * @swagger
 * /api/mutasi/{id}:
 *   delete:
 *     summary: Hapus data mutasi
 *     tags: [Mutasi]
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
router.delete('/:id', mutasiController.remove);

module.exports = router;
