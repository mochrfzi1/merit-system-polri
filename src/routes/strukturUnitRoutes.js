const express = require('express');
const router = express.Router();
const strukturUnitController = require('../controllers/strukturUnitController');
const { validateStrukturUnit } = require('../validators/strukturUnitValidator');

/**
 * @swagger
 * tags:
 *   name: StrukturUnit
 *   description: API untuk struktur_unit
 */

/**
 * @swagger
 * /api/struktur_unit:
 *   get:
 *     summary: Mendapatkan semua data struktur_unit
 *     tags: [StrukturUnit]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', strukturUnitController.getAll);

/**
 * @swagger
 * /api/struktur_unit/{id}:
 *   get:
 *     summary: Mendapatkan detail data struktur_unit berdasarkan ID
 *     tags: [StrukturUnit]
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
router.get('/:id', strukturUnitController.getById);

/**
 * @swagger
 * /api/struktur_unit:
 *   post:
 *     summary: Tambah data struktur_unit baru
 *     tags: [StrukturUnit]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_satker:
 *                 type: integer
 *               id_unit:
 *                 type: integer
 *               id_unit_parent:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validateStrukturUnit, strukturUnitController.create);

/**
 * @swagger
 * /api/struktur_unit/{id}:
 *   put:
 *     summary: Ubah data struktur_unit
 *     tags: [StrukturUnit]
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
 *               id_satker:
 *                 type: integer
 *               id_unit:
 *                 type: integer
 *               id_unit_parent:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validateStrukturUnit, strukturUnitController.update);

/**
 * @swagger
 * /api/struktur_unit/{id}:
 *   delete:
 *     summary: Hapus data struktur_unit
 *     tags: [StrukturUnit]
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
router.delete('/:id', strukturUnitController.remove);

module.exports = router;
