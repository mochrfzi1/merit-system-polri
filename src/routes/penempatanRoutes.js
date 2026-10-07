const express = require('express');
const router = express.Router();
const penempatanController = require('../controllers/penempatanController');
const { validatePenempatan } = require('../validators/penempatanValidator');

/**
 * @swagger
 * tags:
 *   name: Penempatan
 *   description: API untuk penempatan
 */

/**
 * @swagger
 * /api/penempatan:
 *   get:
 *     summary: Mendapatkan semua data penempatan
 *     tags: [Penempatan]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', penempatanController.getAll);

/**
 * @swagger
 * /api/penempatan/{id}:
 *   get:
 *     summary: Mendapatkan detail data penempatan berdasarkan ID
 *     tags: [Penempatan]
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
router.get('/:id', penempatanController.getById);

/**
 * @swagger
 * /api/penempatan:
 *   post:
 *     summary: Tambah data penempatan baru
 *     tags: [Penempatan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_personel:
 *                 type: integer
 *               id_satker:
 *                 type: integer
 *               id_unit:
 *                 type: integer
 *               id_jabatan_struktur:
 *                 type: integer
 *               tmt_mulai:
 *                 type: string
 *               tmt_selesai:
 *                 type: string
 *               status_penempatan:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validatePenempatan, penempatanController.create);

/**
 * @swagger
 * /api/penempatan/{id}:
 *   put:
 *     summary: Ubah data penempatan
 *     tags: [Penempatan]
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
 *               id_satker:
 *                 type: integer
 *               id_unit:
 *                 type: integer
 *               id_jabatan_struktur:
 *                 type: integer
 *               tmt_mulai:
 *                 type: string
 *               tmt_selesai:
 *                 type: string
 *               status_penempatan:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validatePenempatan, penempatanController.update);

/**
 * @swagger
 * /api/penempatan/{id}:
 *   delete:
 *     summary: Hapus data penempatan
 *     tags: [Penempatan]
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
router.delete('/:id', penempatanController.remove);

module.exports = router;
