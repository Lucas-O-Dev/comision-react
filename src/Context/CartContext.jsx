import { createContext, useState } from "react";

export const CartContext = createContext ()

export const CartProvider = ({children}) => {

        const [cart, setCart] = useState ([])

        console.log (cart)
    
        const addToCart = (product) => {
        
        setCart ([...cart, product] ) }

        const itemsInCart = () => {
            return cart.reduce((acc, product) => acc + product.cantidad , 0)  }

        return (

            <CartContext.Provider value = {{
                addToCart,
                itemsInCart
                }}>

                {children}
        </CartContext.Provider>
    )
}



