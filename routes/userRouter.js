const express = require('express');
const router = express.Router();
const userController = require('../controllers/userConroller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router