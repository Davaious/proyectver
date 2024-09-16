// controllers/nftController.js
const { createNFT } = require('../models/NFT');
const { mintNFT } = require('../services/algorandService');

const generateNFT = async (req, res) => {
  const { userId, metadata } = req.body;
  const tokenId = await mintNFT(metadata);
  const nft = await createNFT(userId, tokenId, metadata);
  res.status(201).json(nft);
};

module.exports = { generateNFT };
