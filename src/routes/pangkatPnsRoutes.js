const express = require('express');
const router = express.Router();
const pangkatPnsController = require('../controllers/pangkatPnsController');
const { validatePangkatPns } = require('../validators/pangkatPnsValidator');

/**
 * @swagger
 * tags:
 *   name: PangkatPns
 *   description: API untuk pangkat_pns
 */

/**
 * @swagger
 * /api/pangkat_pns:
 *   get:
 *     summary: Mendapatkan semua data pangkat_pns
 *     tags: [PangkatPns]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', pangkatPnsController.getAll);

/**
 * @swagger
 * /api/pangkat_pns/{id}:
 *   get:
 *     summary: Mendapatkan detail data pangkat_pns berdasarkan ID
 *     tags: [PangkatPns]
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
router.get('/:id', pangkatPnsController.getById);

/**
 * @swagger
 * /api/pangkat_pns:
 *   post:
 *     summary: Tambah data pangkat_pns baru
 *     tags: [PangkatPns]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_golongan_pns:
 *                 type: integer
 *               ruang:
 *                 type: string
 *               nama_pangkat:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validatePangkatPns, pangkatPnsController.create);

/**
 * @swagger
 * /api/pangkat_pns/{id}:
 *   put:
 *     summary: Ubah data pangkat_pns
 *     tags: [PangkatPns]
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
 *               id_golongan_pns:
 *                 type: integer
 *               ruang:
 *                 type: string
 *               nama_pangkat:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validatePangkatPns, pangkatPnsController.update);

/**
 * @swagger
 * /api/pangkat_pns/{id}:
 *   delete:
 *     summary: Hapus data pangkat_pns
 *     tags: [PangkatPns]
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
router.delete('/:id', pangkatPnsController.remove);

module.exports = router;
