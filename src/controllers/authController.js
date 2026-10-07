const authService = require('../services/authService');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json({
      success: true,
      message: 'Registrasi berhasil.',
      data: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register
};
