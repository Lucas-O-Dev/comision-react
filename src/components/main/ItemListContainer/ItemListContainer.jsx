import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InfoProducts from '../InfoProducts/InfoProducts';
import { ListCards } from './ListCards';
import Catalog from '../Catalog/Catalog';
import NewsLetter from '../NewsLetter/NewsLetter';
import Carousel from './Carousel';
import './_itemlistcontainer.scss';

const ItemListContainer = () => {
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
      <InfoProducts />
      <Carousel/>
      <ListCards/>
      <Catalog />
      <NewsLetter />
    </main>
  );
}

export default ItemListContainer;