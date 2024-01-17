import React from "react";
import './_cardfirebase.scss'

const CardFirebase = ({ name, description, price }) => {
    return (
      <div className="conteinerCardFirebase">
        <div className="card">
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        {/* Agrega más campos según sea necesario */}
      </div>
      </div>
    );
  };

  export default CardFirebase;