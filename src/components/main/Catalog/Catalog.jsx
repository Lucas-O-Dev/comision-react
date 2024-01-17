import React, { useEffect } from 'react';
import './_catalog.scss';

import productsData from './products.json';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const handleCardClick = (productId) => {
    // Aquí puedes realizar acciones adicionales al hacer clic en la tarjeta
    console.log(`Card clicked for product with ID ${productId}`);
  };

  return (
    <div className="catalogContainer">
      <div className="productsContainer">
      {productsData.productos.map((producto) => (
  <div key={producto.id} className="card" onClick={() => handleCardClick(producto.id)}>
  <Link to={`/ItemDetail/${producto.id}`}>
  <div className="card">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
      </svg>
      <div className="card__content">
        <p className="card__title">{producto.name}</p>
        <p className="card__description">{producto.description}</p>
        <p className="card__price">${producto.price}</p>
      </div>
    </div>
  </Link>
</div>

))}
      </div>
    </div>
  );
}

export default Catalog;


