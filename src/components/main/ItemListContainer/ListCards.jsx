import React from 'react';
import CardHome from '../CardHome/CardHome'
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
          {/* Componente CardHome con propiedades específicas para la primera tarjeta */}
          <CardHome title="Pollié Esmalte" desc="Color Black" cost="$ 9.50" imageSrc={myImage1} />
          <CardHome title="Pollié Esmalte" desc="Color Aqua" cost="$ 10.50" imageSrc={myImage2} />
          <CardHome title="Pollié Esmalte" desc="Color Red" cost="$ 11.20" imageSrc={myImage3} />
      </div>
    </section>
  );
};
