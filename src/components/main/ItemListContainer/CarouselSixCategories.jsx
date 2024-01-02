import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './_carouselsixcategories.scss'; // Puedes personalizar este archivo CSS según tus necesidades

const categories = [
  'Electrónica',
  'Ropa',
  'Hogar',
  'Deportes',
  'Libros',
  'Juguetes'
];

const CarouselSixCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-slide">
            <h3>{category}</h3>
            {/* Agrega aquí los productos de la categoría */}
            {/* Puedes mostrar imágenes, nombres, etc. */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSixCategories;