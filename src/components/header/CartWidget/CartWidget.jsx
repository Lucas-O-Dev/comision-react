import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myImage from './shoppingcart.png';
import './_cartwidget.scss';
import { CartContext } from '../../../Context/CartContext';

const CartWidget = () => {

  const {itemsInCart} = useContext(CartContext)
  return (
    <Link to="/ViewCart" className='cartIcon'>
      <img className='icon' src={myImage} alt="beauty-icon" />
      <span>{itemsInCart()}</span>
    </Link>
  );
};

export default CartWidget;
