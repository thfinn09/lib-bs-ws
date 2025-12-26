const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.get('/', adminController.getListUsers);
router.post('/', adminController.createUser);
router.put('/', adminController.updateUser);
router.delete('/', adminController.deleteUser);
router.post('/', adminController.createMultiUsers);
router.post('/', adminController.updateMultiUsers);

module.exports = router;
