import React from 'react';
import Navbar from './components/header/NavBar/Navbar';
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer';
import Contact from './components/main/Contact/Contact'
import Background from './components/main/BackgroundHome/BackgroundHome'
import Footer from './components/footer/Footer';
import AddToCart from './components/main/AddToCart/AddToCart';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './components/sass/scss/_body.scss';

    function App() {
        
    return (
<>
<BrowserRouter>
    <Routes>
    {/* Este Route contendrá toda la aplicación */}
    <Route
        path="/"
        element={
        <div>
            <Navbar />
            <Outlet />
        </div>
        }
    >
      {/* Rutas anidadas solo para Navbar */}
        <Route path="/" element={<Background />} />
        <Route path="/Category/:categoryId" element={<ItemListContainer greeting="Special Offers!" />} />
        <Route path="/Item/:productId" element={<AddToCart />} />
        <Route path="/Category/:categoryId" element={<Contact />} />
    </Route>

    {/* Ruta para "/not-found" */}
    <Route path="/not-found" element={<h2>Error: Notfound</h2>} />
    <Route path="*" element={<Navigate to={'/not-found'} />} />
    </Routes>
</BrowserRouter>

        <Footer/>

        </>

// <>

        // <Container>
        //     <Background/>  
        // </Container> 

        // <Container>
        //     <InfoVeneciaHome/>
        // </Container>

        // <Container>
        //     <ItemListContainer greeting="Special Offers!" />
        // </Container>

        // <Container>
        //     <NewsLetter />
        // </Container>

        // {/* <Container>
        //     <AddToCart />
        // </Container> */}

        // </>
    );
    }

export default App;
