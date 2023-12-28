import React, { useState, useRef, useEffect } from 'react';
import './_buttoncontactus.scss'; // Asegúrate de tener un archivo de estilos (CSS o SCSS) para el componente
import ButtonSending from '../ButtonSending/ButtonSending';
import ButtonGeneral from '../ButtonGeneral/ButtonGeneral'

const PopupButton = () => {
  const [showForm, setShowForm] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    // Puedes agregar lógica de envío aquí

    // Cerrar el pop-up después de enviar
    setShowForm(false);

    // Evitar el comportamiento de envío del formulario por defecto
    e.preventDefault();
  };

  return (
    <div className='containerButtonContactUs'>
      {/* <button onClick={toggleForm}>Contact Us!</button> */}
      <ButtonGeneral text='Contact Us!' onClick={toggleForm}/>
      {showForm && (
        <div className="popup-container">
          <div className="popup" ref={popupRef}>
            <form onSubmit={handleSubmit}>
              <label>
                Email
                <input type="text" required />
              </label>
              <label>
                Message
                <input type="email" required />
              </label>
              <ButtonSending/>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;

