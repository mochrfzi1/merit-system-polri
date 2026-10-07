const express = require('express');
const router = express.Router();
const dspPangkatController = require('../controllers/dspPangkatController');
const { validateDspPangkat } = require('../validators/dspPangkatValidator');

/**
 * @swagger
 * tags:
 *   name: DspPangkat
 *   description: API untuk dsp_pangkat
 */

/**
 * @swagger
 * /api/dsp_pangkat:
 *   get:
 *     summary: Mendapatkan semua data dsp_pangkat
 *     tags: [DspPangkat]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', dspPangkatController.getAll);

/**
 * @swagger
 * /api/dsp_pangkat/{id}:
 *   get:
 *     summary: Mendapatkan detail data dsp_pangkat berdasarkan ID
 *     tags: [DspPangkat]
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
router.get('/:id', dspPangkatController.getById);

/**
 * @swagger
 * /api/dsp_pangkat:
 *   post:
 *     summary: Tambah data dsp_pangkat baru
 *     tags: [DspPangkat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_dsp:
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
router.post('/', validateDspPangkat, dspPangkatController.create);

/**
 * @swagger
 * /api/dsp_pangkat/{id}:
 *   put:
 *     summary: Ubah data dsp_pangkat
 *     tags: [DspPangkat]
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
 *               id_dsp:
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
router.put('/:id', validateDspPangkat, dspPangkatController.update);

/**
 * @swagger
 * /api/dsp_pangkat/{id}:
 *   delete:
 *     summary: Hapus data dsp_pangkat
 *     tags: [DspPangkat]
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
router.delete('/:id', dspPangkatController.remove);

module.exports = router;
