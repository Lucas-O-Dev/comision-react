import './_contact.scss'
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import ButtonContactUs from '../ButtonContactUs/ButtonContactUs';
import myImage1 from './10-por-ciento.png'
import myImage2 from './instagram2222.png'
import myImage3 from './youtube.png'

function Contact() {
  const location = useLocation();

  useEffect(() => {
    console.log('La ruta ha cambiado en Contact:', location.pathname);

    // Otras acciones específicas para el componente Contact, si es necesario

  }, [location.pathname]);
  return (
    <>
    <section className="sectionContact">
                  <div className="contactUs">
                  <h2>Contact us!</h2>
                  <p>"You can contact us to receive more information about our products; you will receive a response shortly."</p>
                  </div>
                  <div className="contactSocial">
                  <a href="https://www.instagram.com/"><img src={myImage2} alt="instagramLogo" style={{ width: '30px', height: '30px' }} /></a>
                  <a href="https://www.youtube.com/">  <img src={myImage3} alt="youtubeLogo" style={{ width: '30px', height: '30px' }} /></a>
                  </div>
                  <div className="contactDiscount">
                  <p>"We appreciate you choosing Venecia as your option. As a courtesy, we offer you a discount on your next purchase."</p>
                  <img src={myImage1} alt="DiscountLogo" style={{ width: '50px', height: '50px' }} />
                  </div>
                  <div className="contactInfo">
                  <ul>
                    <li>Avenida San Martín 40, Córdoba (Argentina).</li>
                    <li> +54 9 351-278011</li>
                    <li>info-venecia@gmail.com</li>
                  </ul>
        </div>
    </section>

    <div className="containerPopUp">
      <ButtonContactUs/>
    </div></>
  )
};

export default Contact