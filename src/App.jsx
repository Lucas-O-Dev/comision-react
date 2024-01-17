// App.jsx
import $ from 'jquery';
window.$ = window.jQuery = $;
// Importaciones de React y terceros
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Importaciones de componentes
import Navbar from './components/header/NavBar/Navbar';
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer';
import Contact from './components/main/Contact/Contact';
import Background from './components/main/BackgroundHome/BackgroundHome';
import Footer from './components/footer/Footer';
import ItemDetail from './components/main/ItemDetail/ItemDetail';
import Catalog from './components/main/Catalog/Catalog'; 
import ViewCart from './components/main/ViewCart/ViewCart'
import CheckOut from './components/main/CheckOut/CheckOut';
import { CartProvider } from './Context/CartContext';


function App() {
  
  return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
        />

<CartProvider>
              <BrowserRouter>
              <Routes>


              <Route
              path="/"
              element={
              <div>
              <Navbar />
              <Outlet />
              </div>}>


              <Route path="/" element={<Background />} />
              <Route path="/Category/Products" element={<ItemListContainer />} />
              <Route path="/Category/:categoryId" element={<Contact />} />
              <Route path="/viewcart" element={<ViewCart />} />
              <Route path="/Catalog" component={<Catalog/>} />
              <Route path="/ItemDetail/:id" element={<ItemDetail/>} />
              <Route path="/CheckOut" element={<CheckOut />} />
              </Route>


              <Route path="/not-found" element={<h2>Error: Notfound</h2>} />
              <Route path="*" element={<Navigate to={'/not-found'} />} />


              </Routes>
              </BrowserRouter>
</CartProvider>
        <Footer />
      </>
  );
}

export default App;
