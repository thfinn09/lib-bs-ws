const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

// GET
router.get('/users', adminController.getListUsers);

// CREATE
router.post('/users', adminController.createUser);
router.post('/users/bulk', adminController.createMultiUsers);

// UPDATE
router.put('/users/:id', adminController.updateUser);
router.put('/users/bulk', adminController.updateMultiUsers);

// DELETE
router.delete('/users/:id', adminController.deleteUser);

module.exports = router;
