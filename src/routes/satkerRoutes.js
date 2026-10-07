const express = require('express');
const router = express.Router();
const satkerController = require('../controllers/satkerController');
const { validateSatker } = require('../validators/satkerValidator');

/**
 * @swagger
 * tags:
 *   name: Satker
 *   description: API untuk satker
 */

/**
 * @swagger
 * /api/satker:
 *   get:
 *     summary: Mendapatkan semua data satker
 *     tags: [Satker]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', satkerController.getAll);

/**
 * @swagger
 * /api/satker/{id}:
 *   get:
 *     summary: Mendapatkan detail data satker berdasarkan ID
 *     tags: [Satker]
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
router.get('/:id', satkerController.getById);

/**
 * @swagger
 * /api/satker:
 *   post:
 *     summary: Tambah data satker baru
 *     tags: [Satker]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_satker:
 *                 type: string
 *               id_tingkat:
 *                 type: integer
 *               id_tipe:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateSatker, satkerController.create);

/**
 * @swagger
 * /api/satker/{id}:
 *   put:
 *     summary: Ubah data satker
 *     tags: [Satker]
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
 *               nama_satker:
 *                 type: string
 *               id_tingkat:
 *                 type: integer
 *               id_tipe:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateSatker, satkerController.update);

/**
 * @swagger
 * /api/satker/{id}:
 *   delete:
 *     summary: Hapus data satker
 *     tags: [Satker]
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
router.delete('/:id', satkerController.remove);

module.exports = router;
