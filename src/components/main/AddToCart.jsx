    import React from 'react';
    import ItemCount from './ItemCount';
    import '../sass/components/_addtocart.scss'

    const Product = () => {
    const handleAddToCart = (quantity) => {
        console.log(`Agregados al carrito: ${quantity} unidades`);
    };

    return (<>
        <div className='item-count-container'>
        <h2>Producto</h2>
        <ItemCount initial={0} min={1} max={10} onAdd={handleAddToCart} />
        </div>
        </>
    );
    };

    export default Product;