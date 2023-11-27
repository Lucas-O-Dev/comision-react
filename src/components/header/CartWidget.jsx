// Cambia cartWidget.js a CartWidget.js
import React from 'react';
import myImage from '../assets/cart.svg'

const CartWidget = () => {
    return ( 
        <>
            
            <a className='cart-icon' target='blank' href="https://www.youtube.com/watch?v=df85aCKATUI">
                <img className='icon' src={myImage} alt="beauty-icon" />
                <span>1</span>
            </a>
        </>
    );
}

export default CartWidget;
