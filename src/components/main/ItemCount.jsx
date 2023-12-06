    import React, { useState } from 'react';
    import '../sass/components/_itemcount.scss'

    const ItemCount = ({ initial, min, max, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < max) {
        setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > min) {
        setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (onAdd) {
        onAdd(count);
        }
    };

    return (
        <div className="item-count-container">
        <div className="counter-container">
            <button className="counter-button" onClick={handleDecrement} disabled={count === min}>
            -
            </button>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={handleIncrement} disabled={count === max}>
            +
            </button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
            Agregar al carrito
        </button>
        </div>
    );
    };

    export default ItemCount;

