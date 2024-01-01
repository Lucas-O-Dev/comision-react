import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router
import CardHome from '../CardHome/CardHome'; // Importa el componente CardHome
import './_listcards.scss'
import myImage1 from './esmaltes1.jpg';
import myImage2 from './esmaltes2.jpg';
import myImage3 from './esmaltes3.jpg';

// Componente funcional ListCards que renderiza una lista de CardHome
export const ListCards = () => {
  return (
    // Sección que contiene la lista de tarjetas
    <section className="list-container">
      <h2>Special Offers!</h2>
      {/* Contenedor de tarjetas en la página principal */}
      <div className="cards-home">
        {/* Cada tarjeta está envuelta en un enlace que lleva a la página del ítem correspondiente */}
        <Link to="/Item/1">
          {/* Componente CardHome con propiedades específicas para la primera tarjeta */}
          <CardHome title="Pollié Esmalte" desc="Color Black" cost="$ 9.50" imageSrc={myImage1} />
        </Link>
        {/* Repite el mismo patrón para las siguientes tarjetas */}
        <Link to="/Item/2">
          <CardHome title="Pollié Esmalte" desc="Color Aqua" cost="$ 10.50" imageSrc={myImage2} />
        </Link>
        <Link to="/Item/3">
          <CardHome title="Pollié Esmalte" desc="Color Red" cost="$ 11.20" imageSrc={myImage3} />
        </Link>
      </div>
    </section>
  );
};
