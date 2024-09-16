// models/NFT.js
const pool = require('../config/db');

const createNFT = async (userId, tokenId, metadata) => {
  const result = await pool.query(
    'INSERT INTO nfts (user_id, token_id, metadata) VALUES ($1, $2, $3) RETURNING *',
    [userId, tokenId, metadata]
  );
  return result.rows[0];
};

module.exports = { createNFT };
