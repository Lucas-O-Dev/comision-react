import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './_itemcount.scss';
import ColorSelector from '../ColorSelector/ColorSelector';

const ItemCount = ({ initial, min, max, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (typeof onAdd !== 'function') {
      console.error('La función onAdd no está definida o no es una función válida.');
    }
  }, [onAdd]);

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
    if (onAdd && typeof onAdd === 'function') {
      console.log('Valor actual de count:', count);

      onAdd(count);

      // Agrega el toast de éxito aquí
      toast.success('Added to cart successfully.', {
        position: 'top-right',
        autoClose: 2000, // Cerrar después de 2000ms (2 segundos)
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      console.error('La función onAdd no está definida o no es una función válida.');
    }
  };

  // Mensajes de depuración
  console.log('Estado actual de count:', count);
  console.log('Valores de min y max:', min, max);

  return (
    <div className="containerItemCount">
      <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement} disabled={count === min}>
          -
        </button>
        <span className="counter">{count}</span>
        <button className="counter-button" onClick={handleIncrement} disabled={count === max}>
          +
        </button>
      </div>
      <ColorSelector />
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to cart!
      </button>
    </div>
  );
};

export default ItemCount;
