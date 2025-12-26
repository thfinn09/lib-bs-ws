const userModel = require('../models/user.model');

exports.getListUsers = async (req, res) => {
    const users = await userModel.getAll();
    res.json({ status: 'ok', data: users});
};

exports.createUser = async (req, res) => {
    const id = await userModel.create(req.body);
    res.json({ status: 'ok', data: { id } });
};

exports.updateUser = async (req, res) => {
    await userModel.update(req.body);
    res.json({ status: 'ok' });
};

exports.deleteUser = async (req, res) => {
    const { id } = req.body;
    await userModel.delete(id);
    res.json({ status: 'ok' });
};

exports.createMultiUsers = () => {};
exports.updateMultiUsers = () => {};
