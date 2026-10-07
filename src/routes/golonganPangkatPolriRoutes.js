const express = require('express');
const router = express.Router();
const golonganPangkatPolriController = require('../controllers/golonganPangkatPolriController');
const { validateGolonganPangkatPolri } = require('../validators/golonganPangkatPolriValidator');

/**
 * @swagger
 * tags:
 *   name: GolonganPangkatPolri
 *   description: API untuk golongan_pangkat_polri
 */

/**
 * @swagger
 * /api/golongan_pangkat_polri:
 *   get:
 *     summary: Mendapatkan semua data golongan_pangkat_polri
 *     tags: [GolonganPangkatPolri]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', golonganPangkatPolriController.getAll);

/**
 * @swagger
 * /api/golongan_pangkat_polri/{id}:
 *   get:
 *     summary: Mendapatkan detail data golongan_pangkat_polri berdasarkan ID
 *     tags: [GolonganPangkatPolri]
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
router.get('/:id', golonganPangkatPolriController.getById);

/**
 * @swagger
 * /api/golongan_pangkat_polri:
 *   post:
 *     summary: Tambah data golongan_pangkat_polri baru
 *     tags: [GolonganPangkatPolri]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_golongan:
 *                 type: string
 *               usia_pensiun:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateGolonganPangkatPolri, golonganPangkatPolriController.create);

/**
 * @swagger
 * /api/golongan_pangkat_polri/{id}:
 *   put:
 *     summary: Ubah data golongan_pangkat_polri
 *     tags: [GolonganPangkatPolri]
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
 *               nama_golongan:
 *                 type: string
 *               usia_pensiun:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateGolonganPangkatPolri, golonganPangkatPolriController.update);

/**
 * @swagger
 * /api/golongan_pangkat_polri/{id}:
 *   delete:
 *     summary: Hapus data golongan_pangkat_polri
 *     tags: [GolonganPangkatPolri]
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
router.delete('/:id', golonganPangkatPolriController.remove);

module.exports = router;
