import React from 'react';
import myImage from './NavBar/shoppingcart.png'
import '../sass/scss/_cartwidget.scss'

const CartWidget = () => {
    return ( 
        <>
            
            <a className='cartIcon' target='blank' href="https://www.youtube.com/watch?v=df85aCKATUI">
                <img className='icon' src={myImage} alt="beauty-icon" />
                <span>(1)</span>
            </a>
        </>
    );
}

export default CartWidget;
