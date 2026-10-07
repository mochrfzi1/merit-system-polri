const roleService = require('../services/roleService')

const createRole = async (req, res, next) => {
    try {
        const {nama} = req.body
        if(!nama){
            throw new Error('Nama Role Harus Diisi')    
        }
        const saveRole = await roleService.create(nama)
        res.status(201).json({
            success: true,
            message: 'Role berhasil ditambahkan.',
            data: saveRole
        });
    } catch (error) {
        next(error)
    }
}

const getAllRole = async (req, res, next) => {
    try {
        const roles = await roleService.getAll()
        res.status(200).json({
            success: true,
            message: 'Data berhasil diambil',
            data: roles
        })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const role = await roleService.getById(req.params.id)
        if (!role) throw new Error('Role tidak ditemukan')
        res.status(200).json({ success: true, data: role })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        await roleService.update(req.params.id, req.body.nama)
        res.status(200).json({ success: true, message: 'Role berhasil diubah' })
    } catch (error) {
        next(error)
    }
}

const deleteRole = async (req, res, next) => {
    try {
        await roleService.deleteRole(req.params.id)
        res.status(200).json({ success: true, message: 'Role berhasil dihapus' })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createRole,
    getAllRole,
    getById,
    update,
    delete: deleteRole
}