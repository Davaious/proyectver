// src/components/NFTCard.js
import React from 'react';

const NFTCard = ({ nft }) => {
  return (
    <div className="nft-card">
      <h3>{nft.metadata.name}</h3>
      <p>{nft.metadata.description}</p>
    </div>
  );
};

export default NFTCard;
