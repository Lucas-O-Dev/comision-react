// ProductCard.jsx
import React from 'react';
import { CardHome } from '../CardHome/CardHome';
import './_ProductCard.scss'

const ProductCard = ({ title, desc, cost, imageSrc }) => (
  <CardHome title={title} desc={desc} cost={cost} imageSrc={imageSrc} />
);

export default ProductCard;
