import React, { useState, useEffect } from 'react';
import img1 from './imgcarousel1.webp';
import img2 from './imgcarousel2.webp';
import img3 from './imgcarousel3.webp';
import './_carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Definición del array de imágenes
  const images = [img1, img2, img3];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    setFade(true); // Agrega la clase fade al hacer clic
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    setFade(true); // Agrega la clase fade al hacer clic
  };

  const handleAnimationEnd = () => {
    setFade(false); // Remueve la clase fade cuando la animación termina
  };

  useEffect(() => {
    // Función para manejar el autoplay
    const handleAutoplay = () => {
      const intervalId = setInterval(() => {
        handleNext();
      }, 3000); // Cambia el intervalo según sea necesario

      return () => clearInterval(intervalId);
    };

    // Inicia el autoplay cuando el componente se monta
    handleAutoplay();
  }, []); // El segundo argumento del useEffect es un array de dependencias vacío para ejecutarlo solo una vez al montar el componente

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="arrow-button prev">&#9664;</button>
      <img
        onAnimationEnd={handleAnimationEnd}
        className={`slide ${fade ? "fade" : ""}`}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <button onClick={handleNext} className="arrow-button next">&#9654;</button>
    </div>
  );
};

export default Carousel;
