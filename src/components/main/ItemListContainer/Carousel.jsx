import React, { useState, useEffect } from 'react';
import img1 from './imgcarousel1.png';
import img2 from './imgcarousel2.png';
import img3 from './imgcarousel3.png';
import './_carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3]; // Utilizando las importaciones directas
  const autoplayInterval = 5000;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    let intervalId;

    const handleAutoplay = () => {
      intervalId = setInterval(() => {
        handleNext();
      }, autoplayInterval);
    };

    handleAutoplay();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="arrow-button prev">&#9664;</button>
      <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
      <button onClick={handleNext} className="arrow-button next">&#9654;</button>
    </div>
  );
};

export default Carousel;
