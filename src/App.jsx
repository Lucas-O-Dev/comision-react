import React from 'react';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/main/ItemListContainer';
import NewsLetter from './components/main/NewsLetter';
import Container from './components/main/Container';
import AddToCart from './components/main/AddToCart'
import ItemCount from './components/main/ItemCount';
import './components/sass/components/_body.scss';

    function App() {
    return (
        <>
        <Container>
            <Navbar />
        </Container>

        <Container>
            <ItemListContainer greeting="Special Offers!" />
        </Container>

        <Container>
            <NewsLetter />
        </Container>

        <Container>
            <AddToCart/>
        </Container>

        </>
    );
    }

export default App;
