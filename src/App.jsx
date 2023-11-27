import React from 'react';
import Navbar from './components/header/Navbar';
import Brand from './components/header/Brand';
import CartWidget from './components/header/CartWidget'; // Cambia cartWidget a CartWidget

function App() {
    return (
        <>
            <Navbar />
            <Brand />
            <CartWidget /> {/* Cambia cartWidget a CartWidget */}
        </>
    );
}

export default App;



