const jabatanStrukturService = require('../services/jabatanStrukturService');

const getAll = async (req, res, next) => {
  try {
    const data = await jabatanStrukturService.getAll();
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const data = await jabatanStrukturService.getById(req.params.id);
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const id = await jabatanStrukturService.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Data berhasil ditambahkan',
      data: { id }
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await jabatanStrukturService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Data berhasil diperbarui'
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await jabatanStrukturService.remove(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Data berhasil dihapus'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
