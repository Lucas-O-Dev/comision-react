import React from 'react';
import myImage from '../assets/shoppingcart.png'
import '../sass/components/_cartwidget.scss'

const CartWidget = () => {
    return ( 
        <>
            
            <a className='cart-icon' target='blank' href="https://www.youtube.com/watch?v=df85aCKATUI">
                <img className='icon' src={myImage} alt="beauty-icon" />
                <span>(1)</span>
            </a>
        </>
    );
}

export default CartWidget;
