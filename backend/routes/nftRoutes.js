// routes/nftRoutes.js
const express = require('express');
const { generateNFT } = require('../controllers/nftController');
const router = express.Router();

router.post('/mint', generateNFT);

module.exports = router;
