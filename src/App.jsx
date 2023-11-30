import React from 'react';
import Navbar from './components/header/Navbar';
import Brand from './components/header/Brand';
import CartWidget from './components/header/CartWidget';
import './components/sass/components/_body.scss'

function App() {
    return (
        <>
            <Navbar />
            <Brand />
            <CartWidget /> 
        </>
    );
}

export default App;



