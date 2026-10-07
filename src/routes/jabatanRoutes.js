const express = require('express');
const router = express.Router();
const jabatanController = require('../controllers/jabatanController');
const { validateJabatan } = require('../validators/jabatanValidator');

/**
 * @swagger
 * tags:
 *   name: Jabatan
 *   description: API untuk jabatan
 */

/**
 * @swagger
 * /api/jabatan:
 *   get:
 *     summary: Mendapatkan semua data jabatan
 *     tags: [Jabatan]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', jabatanController.getAll);

/**
 * @swagger
 * /api/jabatan/{id}:
 *   get:
 *     summary: Mendapatkan detail data jabatan berdasarkan ID
 *     tags: [Jabatan]
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
router.get('/:id', jabatanController.getById);

/**
 * @swagger
 * /api/jabatan:
 *   post:
 *     summary: Tambah data jabatan baru
 *     tags: [Jabatan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kode_jabatan:
 *                 type: string
 *               nama_jabatan:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateJabatan, jabatanController.create);

/**
 * @swagger
 * /api/jabatan/{id}:
 *   put:
 *     summary: Ubah data jabatan
 *     tags: [Jabatan]
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
 *               kode_jabatan:
 *                 type: string
 *               nama_jabatan:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateJabatan, jabatanController.update);

/**
 * @swagger
 * /api/jabatan/{id}:
 *   delete:
 *     summary: Hapus data jabatan
 *     tags: [Jabatan]
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
router.delete('/:id', jabatanController.remove);

module.exports = router;
