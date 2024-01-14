import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './_itemcount.scss';
import ColorSelector from '../ColorSelector/ColorSelector';
import productsData from '../Catalog/products.json'

const ItemCount = ({ min, max }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Incrementa count si no ha alcanzado el máximo
    if (count < max) {
      setCount(count + 1);
    } };

  const handleDecrement = () => {
    // Decrementa count si no ha alcanzado el mínimo
    if (count > min) {
      setCount(count - 1);
    }
  };


      // // Agrega el toast de éxito aquí
      // toast.success('Added to cart successfully.', {
      //   position: 'top-right',
      //   autoClose: 2000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // });
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
    </div>
  );
};

export default ItemCount;
