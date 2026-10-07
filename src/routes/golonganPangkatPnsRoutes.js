const express = require('express');
const router = express.Router();
const golonganPangkatPnsController = require('../controllers/golonganPangkatPnsController');
const { validateGolonganPangkatPns } = require('../validators/golonganPangkatPnsValidator');

/**
 * @swagger
 * tags:
 *   name: GolonganPangkatPns
 *   description: API untuk golongan_pangkat_pns
 */

/**
 * @swagger
 * /api/golongan_pangkat_pns:
 *   get:
 *     summary: Mendapatkan semua data golongan_pangkat_pns
 *     tags: [GolonganPangkatPns]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', golonganPangkatPnsController.getAll);

/**
 * @swagger
 * /api/golongan_pangkat_pns/{id}:
 *   get:
 *     summary: Mendapatkan detail data golongan_pangkat_pns berdasarkan ID
 *     tags: [GolonganPangkatPns]
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
router.get('/:id', golonganPangkatPnsController.getById);

/**
 * @swagger
 * /api/golongan_pangkat_pns:
 *   post:
 *     summary: Tambah data golongan_pangkat_pns baru
 *     tags: [GolonganPangkatPns]
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
router.post('/', validateGolonganPangkatPns, golonganPangkatPnsController.create);

/**
 * @swagger
 * /api/golongan_pangkat_pns/{id}:
 *   put:
 *     summary: Ubah data golongan_pangkat_pns
 *     tags: [GolonganPangkatPns]
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
router.put('/:id', validateGolonganPangkatPns, golonganPangkatPnsController.update);

/**
 * @swagger
 * /api/golongan_pangkat_pns/{id}:
 *   delete:
 *     summary: Hapus data golongan_pangkat_pns
 *     tags: [GolonganPangkatPns]
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
router.delete('/:id', golonganPangkatPnsController.remove);

module.exports = router;
