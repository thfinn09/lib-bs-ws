const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { requireLogin } = require('../middlewares/auth.middleware');
const { requireRole } = require('../middlewares/role.middleware');

router.get('/profile',requireLogin,requireRole('USER'),userController.profile);

module.exports = router;
