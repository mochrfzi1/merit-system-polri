const jabatanService = require('../services/jabatanService');

const getAll = async (req, res, next) => {
  try {
    const data = await jabatanService.getAll();
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
    const data = await jabatanService.getById(req.params.id);
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
    const data = await jabatanService.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Data berhasil ditambahkan',
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await jabatanService.update(req.params.id, req.body);
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
    await jabatanService.remove(req.params.id);
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
