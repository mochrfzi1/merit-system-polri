const personelService = require('../services/personelService');

const getAllPersonel = async (req, res, next) => {
  try {
    const data = await personelService.getAllPersonel();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

const getPersonelById = async (req, res, next) => {
  try {
    const data = await personelService.getPersonelById(req.params.id);
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

const createPersonel = async (req, res, next) => {
  try {
    const id = await personelService.createPersonel(req.body);
    res.status(201).json({ success: true, message: 'Data personel berhasil ditambahkan.', data: { id } });
  } catch (error) {
    next(error);
  }
};

const updatePersonel = async (req, res, next) => {
  try {
    await personelService.updatePersonel(req.params.id, req.body);
    res.status(200).json({ success: true, message: 'Data personel berhasil diperbarui.' });
  } catch (error) {
    next(error);
  }
};

const deletePersonel = async (req, res, next) => {
  try {
    await personelService.deletePersonel(req.params.id);
    res.status(200).json({ success: true, message: 'Data personel berhasil dihapus.' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPersonel,
  getPersonelById,
  createPersonel,
  updatePersonel,
  deletePersonel
};
