const express = require('express');
const router = express.Router();
const jabatanPangkatController = require('../controllers/jabatanPangkatController');
const { validateJabatanPangkat } = require('../validators/jabatanPangkatValidator');

/**
 * @swagger
 * tags:
 *   name: JabatanPangkat
 *   description: API untuk jabatan_pangkat
 */

/**
 * @swagger
 * /api/jabatan_pangkat:
 *   get:
 *     summary: Mendapatkan semua data jabatan_pangkat
 *     tags: [JabatanPangkat]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', jabatanPangkatController.getAll);

/**
 * @swagger
 * /api/jabatan_pangkat/{id}:
 *   get:
 *     summary: Mendapatkan detail data jabatan_pangkat berdasarkan ID
 *     tags: [JabatanPangkat]
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
router.get('/:id', jabatanPangkatController.getById);

/**
 * @swagger
 * /api/jabatan_pangkat:
 *   post:
 *     summary: Tambah data jabatan_pangkat baru
 *     tags: [JabatanPangkat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_jabatan_struktur:
 *                 type: integer
 *               jenis_personel:
 *                 type: string
 *               id_pangkat_polri:
 *                 type: integer
 *               id_pangkat_pns:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateJabatanPangkat, jabatanPangkatController.create);

/**
 * @swagger
 * /api/jabatan_pangkat/{id}:
 *   put:
 *     summary: Ubah data jabatan_pangkat
 *     tags: [JabatanPangkat]
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
 *               id_jabatan_struktur:
 *                 type: integer
 *               jenis_personel:
 *                 type: string
 *               id_pangkat_polri:
 *                 type: integer
 *               id_pangkat_pns:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateJabatanPangkat, jabatanPangkatController.update);

/**
 * @swagger
 * /api/jabatan_pangkat/{id}:
 *   delete:
 *     summary: Hapus data jabatan_pangkat
 *     tags: [JabatanPangkat]
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
router.delete('/:id', jabatanPangkatController.remove);

module.exports = router;
