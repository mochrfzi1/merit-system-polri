const express = require('express');
const router = express.Router();
const eselonController = require('../controllers/eselonController');
const { validateEselon } = require('../validators/eselonValidator');

/**
 * @swagger
 * tags:
 *   name: Eselon
 *   description: API untuk eselon
 */

/**
 * @swagger
 * /api/eselon:
 *   get:
 *     summary: Mendapatkan semua data eselon
 *     tags: [Eselon]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', eselonController.getAll);

/**
 * @swagger
 * /api/eselon/{id}:
 *   get:
 *     summary: Mendapatkan detail data eselon berdasarkan ID
 *     tags: [Eselon]
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
router.get('/:id', eselonController.getById);

/**
 * @swagger
 * /api/eselon:
 *   post:
 *     summary: Tambah data eselon baru
 *     tags: [Eselon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kode_eselon:
 *                 type: string
 *               nama_eselon:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateEselon, eselonController.create);

/**
 * @swagger
 * /api/eselon/{id}:
 *   put:
 *     summary: Ubah data eselon
 *     tags: [Eselon]
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
 *               kode_eselon:
 *                 type: string
 *               nama_jabatan:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateEselon, eselonController.update);

/**
 * @swagger
 * /api/eselon/{id}:
 *   delete:
 *     summary: Hapus data eselon
 *     tags: [Eselon]
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
router.delete('/:id', eselonController.remove);

module.exports = router;
