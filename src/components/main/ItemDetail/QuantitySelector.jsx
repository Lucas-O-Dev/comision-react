import React from "react";

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    const handleIncrement = () => {
      // Incrementa count 
      cantidad < stock && setCantidad(cantidad + 1);
    };

    const handleDecrement = () => {
      // Decrementa count 
      cantidad > 1 && setCantidad(cantidad - 1);
    };

    return (
      <>
      <div className="counter-container">
  <button className="counter-button" onClick={handleDecrement} >
  -
  </button> 
  <span className="counter">{cantidad}</span>
  <button className="counter-button" onClick={handleIncrement} >
  +
  </button>
  </div>
</>
    )
}

export default QuantitySelector;