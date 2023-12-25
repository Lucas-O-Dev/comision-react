import React, { useState } from 'react';
import Navbar from './components/header/NavBar/Navbar';
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer';
import Contact from './components/main/Contact/Contact'
import Background from './components/main/BackgroundHome/BackgroundHome'
import Footer from './components/footer/Footer';
import ItemDetail from './components/main/AddToCart/ItemDetail';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CartContext } from './Context/CartContext';
import './components/sass/scss/_body.scss';

    function App() {

        const [cart, setCart] = useState([])
        console.log(cart)
        return (
<CartContext.Provider value = {{
    cart
}}>
<>
<ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
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
        <Route path="/Category/Products" element={<ItemListContainer greeting="Special Offers!" />} />
        <Route path="/Item/:productId" element={<ItemDetail />} />
        <Route path="/Category/:categoryId" element={<Contact />} />
    </Route>

    {/* Ruta para "/not-found" */}
    <Route path="/not-found" element={<h2>Error: Notfound</h2>} />
    <Route path="*" element={<Navigate to={'/not-found'} />} />
    </Routes>
</BrowserRouter>

        <Footer/>

    </>

</CartContext.Provider>
    );
    }

export default App;
