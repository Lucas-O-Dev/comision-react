import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import  CartContext  from '../../../Context/CartContext'; // Ajusta la ruta según tu estructura de archivos

import './_viewcart.scss'

const ViewCart = () => {
    const { cart, itemsInCart,removeFromCart } = useContext(CartContext);
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
      };

        return (
            <div className="containerViewCart">
                                <h2>Contenido del Carrito:</h2>
            <div className='conteinerItemCart'>
                <ul>
                {cart.map((product, index) => (
            <CartItem key={index} product={product} onRemove={handleRemoveFromCart} />
            ))}
                </ul>
            </div>
            <p>Total de ítems en el carrito: {itemsInCart()}</p>
            <button>Clear Cart</button>
            <Link to="/CheckOut"><button>Finalizar compra</button></Link>
            </div>
        );
        };

    export default ViewCart
