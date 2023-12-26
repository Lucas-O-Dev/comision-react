import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import { Link } from 'react-router-dom';
import './_navbar.scss';

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    // Agregar la clase después de un breve retraso para que la animación sea visible al cargar la página
    const timeoutId = setTimeout(() => {
      setNavVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className={`header-home ${navVisible ? 'nav-visible' : ''}`}>
      <Brand />
      <div className="conteiner">
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/Category/Products'}>Products</Link>
          <Link to={'/Category/Contact'}>Contact</Link>
        </nav>
      </div>
      <CartWidget />
    </header>
  );
};

export default Navbar;
