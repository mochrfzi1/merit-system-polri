const express = require('express');
const router = express.Router();
const pangkatPolriController = require('../controllers/pangkatPolriController');
const { validatePangkatPolri } = require('../validators/pangkatPolriValidator');

/**
 * @swagger
 * tags:
 *   name: PangkatPolri
 *   description: API untuk pangkat_polri
 */

/**
 * @swagger
 * /api/pangkat_polri:
 *   get:
 *     summary: Mendapatkan semua data pangkat_polri
 *     tags: [PangkatPolri]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', pangkatPolriController.getAll);

/**
 * @swagger
 * /api/pangkat_polri/{id}:
 *   get:
 *     summary: Mendapatkan detail data pangkat_polri berdasarkan ID
 *     tags: [PangkatPolri]
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
router.get('/:id', pangkatPolriController.getById);

/**
 * @swagger
 * /api/pangkat_polri:
 *   post:
 *     summary: Tambah data pangkat_polri baru
 *     tags: [PangkatPolri]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_golongan_polri:
 *                 type: integer
 *               kode_pangkat:
 *                 type: string
 *               nama_pangkat:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validatePangkatPolri, pangkatPolriController.create);

/**
 * @swagger
 * /api/pangkat_polri/{id}:
 *   put:
 *     summary: Ubah data pangkat_polri
 *     tags: [PangkatPolri]
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
 *               id_golongan_polri:
 *                 type: integer
 *               kode_pangkat:
 *                 type: string
 *               nama_pangkat:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validatePangkatPolri, pangkatPolriController.update);

/**
 * @swagger
 * /api/pangkat_polri/{id}:
 *   delete:
 *     summary: Hapus data pangkat_polri
 *     tags: [PangkatPolri]
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
router.delete('/:id', pangkatPolriController.remove);

module.exports = router;
