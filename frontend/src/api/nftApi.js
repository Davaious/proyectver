// src/api/nftApi.js
import axios from 'axios';

export const mintNFT = async (userId, metadata) => {
  const response = await axios.post('/api/nfts/mint', { userId, metadata });
  return response.data;
};
