// CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Creamos un contexto para manejar el estado global del carrito
export const CartContext = createContext();

// Proveedor de contexto que contendrá el estado del carrito y funciones para modificarlo
export const CartProvider = ({ children }) => {
  // Estado del carrito que almacenará los elementos seleccionados
  const [cart, setCart] = useState([]);

  // Función para agregar un elemento al carrito
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Verificamos si el elemento ya está presente en el carrito (basado en una propiedad única, como el ID)
      if (!prevCart.some((cartItem) => cartItem.id === item.id)) {
        // Agregamos el nuevo elemento al carrito
        return [...prevCart, item];
      }
      // El elemento ya está en el carrito, no hacemos cambios
      return prevCart;
    });
  };

  // Proporcionamos el estado del carrito y las funciones relacionadas a los componentes hijos
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carrito
const useCart = () => {
  const context = useContext(CartContext);
  // Verificamos que el hook se esté utilizando dentro de un proveedor de contexto válido
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  // Devolvemos el contexto que contiene el estado del carrito y las funciones para modificarlo
  return context;
};

export default useCart;




