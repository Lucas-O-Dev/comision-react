// ItemDetail.jsx
// ItemDetail.jsx
import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import PokeApi from '../PokeApi/PokeApi';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { CartContext } from '../../../Context/CartContext';  // Asegúrate de que la importación sea correcta

import './_ItemDetail.scss';

const ItemDetail = () => {
  const { productId } = useParams();
  const { cart, setCart, addToCart } = useContext(CartContext);

  // Simula la información del producto basada en productId
  const productInfo = {
    title: `Pollié Esmalte ${productId}`,
    desc: `Color para el producto ${productId}`,
    cost: `$${9.50 + parseFloat(productId)}`,
    imageSrc: `../ItemListContainer/esmaltes${productId}.jpg`, // Asegúrate de tener la ruta correcta
  };

  const handleAddToCart = (quantity) => {
    console.log(`Agregados al carrito: ${quantity} unidades para el producto ${productId}`);
    console.log('Cart antes de la actualización:', cart);
    
    // Aquí puedes realizar acciones adicionales, como agregar el producto al carrito
    const newItem = {
      productId,
      quantity,
      // Otros detalles del producto que quieras agregar al carrito
    };

    // Actualizar el carrito utilizando setCart
    addToCart(newItem);
  };

  console.log('Cart después de la actualización:', cart);

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

export default ItemDetail;
