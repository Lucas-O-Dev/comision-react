import React from 'react';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/main/ItemListContainer';
import './components/sass/components/_body.scss'
import './components/sass/components/_itemlistcontainer.scss'

function App() {
    return (

<>

            <Navbar />

            <ItemListContainer greeting={ "Special Offers!"}/>

</>

);
}

export default App;



