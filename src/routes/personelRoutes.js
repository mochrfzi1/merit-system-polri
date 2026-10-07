const express = require('express');
const router = express.Router();
const personelController = require('../controllers/personelController');
const { validatePersonel } = require('../validators/personelValidator');

/**
 * @swagger
 * /api/personel:
 *   get:
 *     summary: Mendapatkan semua data personel
 *     tags: [Personel]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', personelController.getAllPersonel);

/**
 * @swagger
 * /api/personel/{id}:
 *   get:
 *     summary: Mendapatkan detail personel
 *     tags: [Personel]
 *     security:
 *       - bearerAuth: []
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
router.get('/:id', personelController.getPersonelById);

/**
 * @swagger
 * /api/personel:
 *   post:
 *     summary: Tambah personel baru
 *     tags: [Personel]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - jk
 *               - tempat_lahir
 *               - tanggal_lahir
 *               - jenis_personel
 *               - tanggal_masuk
 *               - status_personel
 *             properties:
 *               nama:
 *                 type: string
 *               jk:
 *                 type: string
 *                 enum: [pria, wanita]
 *               tempat_lahir:
 *                 type: string
 *               tanggal_lahir:
 *                 type: string
 *                 format: date
 *               jenis_personel:
 *                 type: string
 *                 enum: [PNS, POLRI]
 *               tanggal_masuk:
 *                 type: string
 *                 format: date
 *               status_personel:
 *                 type: string
 *                 enum: [aktif, pensiun]
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', validatePersonel, personelController.createPersonel);

/**
 * @swagger
 * /api/personel/{id}:
 *   put:
 *     summary: Ubah data personel
 *     tags: [Personel]
 *     security:
 *       - bearerAuth: []
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
 *             required:
 *               - nama
 *               - jk
 *               - tempat_lahir
 *               - tanggal_lahir
 *               - jenis_personel
 *               - tanggal_masuk
 *               - status_personel
 *             properties:
 *               nama:
 *                 type: string
 *               jk:
 *                 type: string
 *                 enum: [pria, wanita]
 *               tempat_lahir:
 *                 type: string
 *               tanggal_lahir:
 *                 type: string
 *                 format: date
 *               jenis_personel:
 *                 type: string
 *                 enum: [PNS, POLRI]
 *               tanggal_masuk:
 *                 type: string
 *                 format: date
 *               status_personel:
 *                 type: string
 *                 enum: [aktif, pensiun]
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', validatePersonel, personelController.updatePersonel);

/**
 * @swagger
 * /api/personel/{id}:
 *   delete:
 *     summary: Hapus data personel
 *     tags: [Personel]
 *     security:
 *       - bearerAuth: []
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
router.delete('/:id', personelController.deletePersonel);

module.exports = router;
