const express = require('express');
const router = express.Router();
const dspController = require('../controllers/dspController');
const { validateDsp } = require('../validators/dspValidator');

/**
 * @swagger
 * tags:
 *   name: Dsp
 *   description: API untuk dsp
 */

/**
 * @swagger
 * /api/dsp:
 *   get:
 *     summary: Mendapatkan semua data dsp
 *     tags: [Dsp]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', dspController.getAll);

/**
 * @swagger
 * /api/dsp/{id}:
 *   get:
 *     summary: Mendapatkan detail data dsp berdasarkan ID
 *     tags: [Dsp]
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
router.get('/:id', dspController.getById);

/**
 * @swagger
 * /api/dsp:
 *   post:
 *     summary: Tambah data dsp baru
 *     tags: [Dsp]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_tipe:
 *                 type: integer
 *               id_unit:
 *                 type: integer
 *               id_jabatan_struktur:
 *                 type: integer
 *               jumlah_dsp:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateDsp, dspController.create);

/**
 * @swagger
 * /api/dsp/{id}:
 *   put:
 *     summary: Ubah data dsp
 *     tags: [Dsp]
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
 *               id_tipe:
 *                 type: integer
 *               id_unit:
 *                 type: integer
 *               id_jabatan_struktur:
 *                 type: integer
 *               jumlah_dsp:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateDsp, dspController.update);

/**
 * @swagger
 * /api/dsp/{id}:
 *   delete:
 *     summary: Hapus data dsp
 *     tags: [Dsp]
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
router.delete('/:id', dspController.remove);

module.exports = router;
