import React from 'react';
import { Link } from 'react-router-dom';
import CardHome from '../CardHome/CardHome';
import './_catalog.scss';

function Catalog() {
  return (
    <div className="catalogContainer">
      <div className="productsContainer">
        {/* Wrap each CardHome with a Link */}
        <Link to="/">
          <CardHome />
        </Link>
        <Link to="/">
          <CardHome />
        </Link>
        <Link to="/">
          <CardHome />
        </Link>
        <Link to="/">
          <CardHome />
        </Link>
        <Link to="/">
          <CardHome />
        </Link>
        <Link to="/">
          <CardHome />
        </Link>
      </div>
    </div>
  );
}

export default Catalog;