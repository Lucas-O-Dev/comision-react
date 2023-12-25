
import React, { useState, useRef, useEffect } from 'react';
import './_buttonreserve.scss'

    const ButtonReserve = () => {
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
            <button onClick={toggleForm}>Reserve</button>
    
            {showForm && (
            <div className="popup-container">
                <div className="popup" ref={popupRef}>
                <h1>Venecia</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                    Email
                    <input type="email" required />
                    </label>
                    <label>
                    Date
                    <input type="text" required />
                    </label>
                    <label>
                    Hour
                    <input type="text" required />
                    </label>
                    <button type="submit" className='btnSubmit'>Submit</button>
                </form>
                </div>
            </div>
            )}
        </div>
        );
    };

export default ButtonReserve