// Container.jsx (o Conteiner.jsx, ajusta el nombre del archivo según sea necesario)
import React from 'react';
import '../sass/components/_container.scss'

const Container = ({ children }) => {
    return (
    <div className="container">
      {/* Renderiza los children dentro del contenedor */}
        {children}
    </div>
    );
};

export default Container;
