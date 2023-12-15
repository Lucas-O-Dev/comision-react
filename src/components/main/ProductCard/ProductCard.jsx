// ProductCard.jsx
import React from 'react';
import { CardHome } from '../CardHome/CardHome';

const ProductCard = ({ title, desc, cost, imageSrc }) => (
  <CardHome title={title} desc={desc} cost={cost} imageSrc={imageSrc} />
);

export default ProductCard;
