// App.jsx
import React from 'react';
import Navbar from './components/header/NavBar/Navbar';
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer';
import Contact from './components/main/Contact/Contact';
import Background from './components/main/BackgroundHome/BackgroundHome';
import Footer from './components/footer/Footer';
import ItemDetail from './components/main/ItemDetail/ItemDetail';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './Context/CartContext';
import './components/sass/scss/_body.scss';

function App() {
  return (
    <CartProvider>
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
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Outlet />
                </div>
              }
            >
              <Route path="/" element={<Background />} />
              <Route path="/Category/Products" element={<ItemListContainer greeting="Special Offers!" />} />
              <Route path="/Item/:productId" element={<ItemDetail />} />
              <Route path="/Category/:categoryId" element={<Contact />} />
            </Route>

            <Route path="/not-found" element={<h2>Error: Notfound</h2>} />
            <Route path="*" element={<Navigate to={'/not-found'} />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
