import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import PokeApi from '../PokeApi/PokeApi';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

import './_addtocart.scss';

const AddToCart = () => {
  const { productId } = useParams();

  const handleAddToCart = (quantity) => {
    console.log(`Agregados al carrito: ${quantity} unidades para el producto ${productId}`);
    // Aquí puedes realizar acciones adicionales, como agregar el producto al carrito
  };

  // Simula la información del producto basada en productId
  const productInfo = {
    title: `Pollié Esmalte ${productId}`,
    desc: `Color para el producto ${productId}`,
    cost: `$${9.50 + parseFloat(productId)}`,
    imageSrc: `../ItemListContainer/esmaltes${productId}.jpg`, // Asegúrate de tener la ruta correcta
  };

  console.log('Product Info:', productInfo); // Agrega este console.log para verificar la información del producto

  return (
    <div className="conteiner-api">
      <div className='item-count-container'>
        <h2>Producto {productId}</h2>
        <ProductCard {...productInfo} />
        <ItemCount initial={0} min={1} max={10} onAdd={handleAddToCart} />
      </div>
      <PokeApi />
    </div>
  );
};

export default AddToCart;
