const express = require('express')
const router = express.Router()
const roleController = require('../controllers/roleController')


/**
 * @swagger
 * tags:
 *   name: Role
 *   description: API untuk role
 */

/**
 * @swagger
 * /api/role:
 *   get:
 *     summary: Mendapatkan semua data role
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: NotFound
 */
router.get('/', roleController.getAllRole)


/**
 * @swagger
 * /api/role/{id}:
 *   get:
 *     summary: Mendapatkan data role berdasarkan ID
 *     tags: [Role]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: NotFound
 */
router.get('/:id', roleController.getById)

/**
 * @swagger
 * /api/role:
 *   post:
 *     summary: Menambahkan data role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: NotFound
 */
router.post('/', roleController.createRole)


/**
 * @swagger
 * /api/role/{id}:
 *   put:
 *     summary: Mengubah data role
 *     tags: [Role]
 *     parameters:
 *       - name: id
 *         in: path
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
 *               nama:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: NotFound
 */
router.put('/:id', roleController.update)

/**
 * @swagger
 * /api/role/{id}:
 *   delete:
 *     summary: Menghapus data role berdasarkan ID
 *     tags: [Role]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: NotFound
 */
router.delete('/:id', roleController.delete)

module.exports = router