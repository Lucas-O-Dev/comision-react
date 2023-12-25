import { useContext, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Ejemplo from "../../ejemplos/Ejemplo";


const ItemDetail = ({ item }) => {
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState(1)
  const { addToCart, isInCart } = useContext(CartContext)

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad, // => cantidad: cantidad
    }

    addToCart(itemToCart)
  }

  const handleVolver = () => {
    navigate(-1)
  }

  return (
    <div className="container m-auto mt-8">
      <Boton onClick={handleVolver}>Volver</Boton>
      <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
      <hr />


      <div className="flex gap-8 pt-4">
        <img src={item.img} alt={item.name} />

        <div>
          <p>{item.description}</p>
          <p className="text-xl font-bold">Precio: ${item.price}</p>
          <Ejemplo />


          {
            isInCart( item.id )
              ? <Boton><Link to="/cart">Terminar mi compra</Link></Boton>
              : <>
                  <QuantitySelector 
                    cantidad={cantidad}
                    stock={item.stock}
                    setCantidad={ setCantidad }
                  />          
                  <Boton onClick={handleAgregar} disabled={item.stock === 0}>Agregar al carrito</Boton>
                </>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

// import React, { useContext } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
// import PokeApi from '../PokeApi/PokeApi';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../ProductCard/ProductCard';

// import './_ItemDetail.scss';
// import { CartContext } from '../../../Context/CartContext';

// const AddToCart = () => {
//   const { productId } = useParams();
//   const {cart} = useContext (CartContext)
//   console.log("Item Detail:" ,cart)

//   const handleAddToCart = (quantity) => {
//     console.log(`Agregados al carrito: ${quantity} unidades para el producto ${productId}`);
//     // Aquí puedes realizar acciones adicionales, como agregar el producto al carrito
//     const itemToCart = {
//       ...item,
//       cantidad, // => cantidad: cantidad
//     }

//     setCart ([...cart, itemToCart])
//   };

//   // Simula la información del producto basada en productId
//   const productInfo = {
//     title: `Pollié Esmalte ${productId}`,
//     desc: `Color para el producto ${productId}`,
//     cost: `$${9.50 + parseFloat(productId)}`,
//     imageSrc: `../ItemListContainer/esmaltes${productId}.jpg`, // Asegúrate de tener la ruta correcta
//   };

//   console.log('Product Info:', productInfo); // Agrega este console.log para verificar la información del producto

//   return (
//     <div className="conteiner-api">
//       <div className='item-count-container'>
//         <h2>Producto {productId}</h2>
//         <ProductCard {...productInfo} />
//         <ItemCount initial={0} min={1} max={10} onAdd={handleAddToCart} />
//       </div>
//       <PokeApi />
//     </div>
//   );
// };

// export default AddToCart;
