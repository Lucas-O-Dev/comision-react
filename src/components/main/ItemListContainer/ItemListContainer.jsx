
import { Link, useParams } from 'react-router-dom';
import CardHome from '../CardHome/CardHome';
import myImage1 from './esmaltes1.jpg';
import myImage2 from './esmaltes2.jpg';
import myImage3 from './esmaltes3.jpg';
import Catalog from '../Catalog/Catalog';
import InfoProducts from '../InfoProducts/InfoProducts';
import NewsLetter from '../NewsLetter/NewsLetter';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './_itemlistcontainer.scss';

const ItemListContainer = ({ greeting }) => {
    // Obtiene la ubicación actual desde React Router
    const location = useLocation();

    useEffect(() => {
      // Lógica para manejar cambios de ruta
      console.log('La ruta ha cambiado:', location.pathname);
  
      // Puedes realizar acciones específicas según la ruta actual
      if (location.pathname.includes('/Category/')) {
        // Extraer categoryId de la ruta y realizar lógica específica
        const categoryId = location.pathname.split('/Category/')[1];
        console.log('Estás en la página de categoría con ID:', categoryId);
      }
  
      // Puedes tener más lógica aquí según tus necesidades
  
    }, [location.pathname]); // useEffect se ejecutará cuando cambie la ruta (location.pathname)


  return (
    <main className="main-home">
      <div className="conteiner-greeting">
        <p className='greeting'>{greeting}</p>
      </div>
      <section className="list-container">
        <div className="cards-home">
          {/* Wrap each CardHome with a Link */}
          <Link to="/Item/1">
            <CardHome title="Pollié Esmalte" desc="Color Black" cost="$ 9.50" imageSrc={myImage1} />
          </Link>
          <Link to="/Item/2">
            <CardHome title="Pollié Esmalte" desc="Color Aqua" cost="$ 10.50" imageSrc={myImage2} />
          </Link>
          <Link to="/Item/3">
            <CardHome title="Pollié Esmalte" desc="Color Red" cost="$ 11.20" imageSrc={myImage3} />
          </Link>
        </div>
      </section>
      <InfoProducts />
      <Catalog />
      <NewsLetter />
    </main>
  );
}

export default ItemListContainer;