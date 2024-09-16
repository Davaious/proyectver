// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Ruta para registro de usuarios
router.post('/register', registerUser);

// Ruta para login de usuarios
router.post('/login', loginUser);

module.exports = router;
