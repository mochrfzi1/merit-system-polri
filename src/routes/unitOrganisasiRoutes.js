const express = require('express');
const router = express.Router();
const unitOrganisasiController = require('../controllers/unitOrganisasiController');
const { validateUnitOrganisasi } = require('../validators/unitOrganisasiValidator');

/**
 * @swagger
 * tags:
 *   name: UnitOrganisasi
 *   description: API untuk unit_organisasi
 */

/**
 * @swagger
 * /api/unit_organisasi:
 *   get:
 *     summary: Mendapatkan semua data unit_organisasi
 *     tags: [UnitOrganisasi]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', unitOrganisasiController.getAll);

/**
 * @swagger
 * /api/unit_organisasi/{id}:
 *   get:
 *     summary: Mendapatkan detail data unit_organisasi berdasarkan ID
 *     tags: [UnitOrganisasi]
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
router.get('/:id', unitOrganisasiController.getById);

/**
 * @swagger
 * /api/unit_organisasi:
 *   post:
 *     summary: Tambah data unit_organisasi baru
 *     tags: [UnitOrganisasi]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kode_unit:
 *                 type: string
 *               nama_unit:
 *                 type: string
 *               id_tingkat:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateUnitOrganisasi, unitOrganisasiController.create);

/**
 * @swagger
 * /api/unit_organisasi/{id}:
 *   put:
 *     summary: Ubah data unit_organisasi
 *     tags: [UnitOrganisasi]
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
 *               kode_unit:
 *                 type: string
 *               nama_unit:
 *                 type: integer
 *               id_tingkat:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateUnitOrganisasi, unitOrganisasiController.update);

/**
 * @swagger
 * /api/unit_organisasi/{id}:
 *   delete:
 *     summary: Hapus data unit_organisasi
 *     tags: [UnitOrganisasi]
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
router.delete('/:id', unitOrganisasiController.remove);

module.exports = router;
