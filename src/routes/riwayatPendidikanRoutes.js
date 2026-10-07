const express = require('express');
const router = express.Router();
const riwayatPendidikanController = require('../controllers/riwayatPendidikanController');

/**
 * @swagger
 * tags:
 *   name: RiwayatPendidikan
 *   description: API untuk riwayat_pendidikan
 */

/**
 * @swagger
 * /api/riwayat_pendidikan:
 *   get:
 *     summary: Mendapatkan semua data riwayat_pendidikan
 *     tags: [RiwayatPendidikan]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', riwayatPendidikanController.getAll);

/**
 * @swagger
 * /api/riwayat_pendidikan/{id}:
 *   get:
 *     summary: Mendapatkan detail data riwayat_pendidikan berdasarkan ID
 *     tags: [RiwayatPendidikan]
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
router.get('/:id', riwayatPendidikanController.getById);

/**
 * @swagger
 * /api/riwayat_pendidikan:
 *   post:
 *     summary: Tambah data riwayat_pendidikan baru
 *     tags: [RiwayatPendidikan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_personel:
 *                 type: integer
 *               id_tingkat_pendidikan:
 *                 type: integer
 *               nama_institusi:
 *                 type: string
 *               jurusan:
 *                 type: string
 *               tahun_masuk:
 *                 type: integer
 *               tahun_lulus:
 *                 type: integer
 *               nomor_ijazah:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', riwayatPendidikanController.create);

/**
 * @swagger
 * /api/riwayat_pendidikan/{id}:
 *   put:
 *     summary: Ubah data riwayat_pendidikan
 *     tags: [RiwayatPendidikan]
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
 *               id_tingkat_pendidikan:
 *                 type: integer
 *               nama_institusi:
 *                 type: string
 *               jurusan:
 *                 type: string
 *               tahun_masuk:
 *                 type: integer
 *               tahun_lulus:
 *                 type: integer
 *               nomor_ijazah:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', riwayatPendidikanController.update);

/**
 * @swagger
 * /api/riwayat_pendidikan/{id}:
 *   delete:
 *     summary: Hapus data riwayat_pendidikan
 *     tags: [RiwayatPendidikan]
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
router.delete('/:id', riwayatPendidikanController.remove);

module.exports = router;
