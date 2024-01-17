import React, { useState,useContext } from "react";
import CartContext from '../../../Context/CartContext'
import './_checkout.scss'

const CheckOut = () => {

    const { cart } = useContext(CartContext);

    const [values,setValues] = useState ({
        name:'',
        adress:'',
        email:''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValues ({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log ("submit")
        console.log(values)
        console.log(order)
    }

    const order = {
        client:values,
        items: cart,
        fecha:new Date()
    }

    return (
        <div className="conteinerFormCheckOut">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
            <input
            type="text" 
            placeholder="Name"
            onChange={handleInputChange}
            value={values.name}
            name="name" />
            <input type="text"
            id="adress" 
            name="adress" 
            placeholder="Adress"
            onChange={handleInputChange}
            value={values.adress}/>
            <input type="email" 
            id="email" 
            name="email" 
            placeholder="Email"
            onChange={handleInputChange}
            value={values.email}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CheckOut