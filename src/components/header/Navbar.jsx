import { useState } from 'react'
import myImage from '../assets/shoppingcart.png';
import '../sass/base/_settings.scss'
import '../sass/components/_navbar.scss';


const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="conteiner">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a
              role="button"
              onClick={() => {
                setActive(!active);
              }}
              className={`navbar-burger ${active ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div className="navbar-start">

            <div className="navbar-border">

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Brands</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;