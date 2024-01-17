import { createContext, useState } from "react";

 const CartContext = createContext ()

export const CartProvider = ({children}) => {

        const [cart, setCart] = useState ([])

        console.log (cart)
    
        const addToCart = (product) => {
        
        setCart ([...cart, product] ) }

        const removeFromCart = (productId) => {
            const updatedCart = cart.filter((product) => product.id !== productId);
            setCart(updatedCart);};

        const itemsInCart = () => {
            return cart.reduce((acc, product) => acc + product.cantidad , 0)  }

        return (

            <CartContext.Provider value = {{
                cart,
                addToCart,
                removeFromCart,
                itemsInCart
                }}>

                {children}
        </CartContext.Provider>
    )
}

export default CartContext

