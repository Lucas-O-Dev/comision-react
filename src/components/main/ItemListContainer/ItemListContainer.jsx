import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import InfoProducts from '../InfoProducts/InfoProducts';
import { ListCards } from './ListCards';
import CarouselSixCategories from './CarouselSixCategories'
import NewsLetter from '../NewsLetter/NewsLetter';
import Carousel from './Carousel';
import Catalog from '../Catalog/Catalog';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import './_itemlistcontainer.scss';
import CardFirebase from './CardFirebase';

const ItemListContainer = () => {
    // Obtiene la ubicación actual desde React Router
    const location = useLocation();
    const [productos, setProductos] = useState([]);

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

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       // 1.- Armar una referencia (sync)
    //       const productosRef = collection(db, 'Productos');
  
    //       // 2.- Llamar a esa referencia (async)
    //       const querySnapshot = await getDocs(productosRef);
  
    //       // 3.- Manejar los datos después de la consulta (async)
    //       const docs = querySnapshot.docs.map(doc=>doc.data())
    //       console.log(docs);
    //     } catch (error) {
    //       console.error('Error al obtener datos:', error);
    //     }
    //   };
  
    //   fetchData(); // Llamar a la función asincrónica dentro del useEffect
    // }, []); // Asegúrate de que el array de dependencias esté vacío si solo quieres que se ejecute una vez

    useEffect(() => {

      // 1.- Armar una referencia (sync)
      const productosRef = collection(db, 'Productos')      // 2.- Llamar a esa referencia (async)

      getDocs ( productosRef )
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id:doc.id
          }
        })
        console.log(docs)
        setProductos(docs);
      })
      },[])
 
  return (
    <main className="main-home">
      <CarouselSixCategories/>
      <InfoProducts />
      <Carousel/>
      <Catalog/>
      <ListCards/>
      <div className="conteinerFirebase">
        {productos.map((producto, index) => (
          <CardFirebase
            key={index}
            name={producto.Name}
            description={producto.Description}
            price={producto.Price}
          />
        ))}
      </div>
      <NewsLetter />
    </main>
  );
}

export default ItemListContainer;