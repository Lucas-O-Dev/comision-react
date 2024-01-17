    // ItemDetail.jsx
    import React, { useState, useEffect, useContext } from 'react';
    import { useParams } from 'react-router-dom';
    import QuantitySelector from './QuantitySelector'
    import productsData from '../Catalog/products.json';
    import './_ItemDetail.scss';
    import ColorSelector from './ColorSelector';
    import  CartContext  from '../../../Context/CartContext';

        const ItemDetail = () => {

        const { id } = useParams(); // Obtén el parámetro id de la URL
        const [ product, setProduct ] = useState( null );
        const [ cantidad, setCantidad ] = useState( 1 );
        const [color, setColor] = useState("");
        const { addToCart } = useContext( CartContext )




        useEffect(() => {
        // Simulando una solicitud asíncrona para cargar los datos del producto
        // En una aplicación real, podrías utilizar fetch o axios para cargar datos desde un servidor
        // En este caso, estamos utilizando un setTimeout para simular una carga asíncrona
        const fetchData = () => {
            setTimeout(() => {
            // Aquí puedes usar productsData para obtener los datos del producto
            const productId = parseInt(id);
            const selectedProduct = productsData.productos.find(producto => producto.id === productId);

            setProduct( selectedProduct );
            }, 1000 );}; // Simulamos un retardo de carga de 1 segundo

        fetchData();
        }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez, cuando el componente se monta



        const handleAddItem = () => {

          const itemToCart = {
            ...product,
            cantidad,
            color
          }  
        
          addToCart (itemToCart)
        
        }

        if (!product) {
        return <div>Cargando...</div>;
        }


        return (
            <div className="containerItemDetail">
            <div className='CardItemDetail'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <h2>Detalles del Producto {id}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>

            <QuantitySelector 
            cantidad={cantidad}
            stock={product.stock}
            setCantidad={setCantidad}
            />

            <ColorSelector setColor={setColor}/>
            <button className="add-to-cart-button" onClick={handleAddItem}>
            Add to cart!
            </button>
</div></div>
          );};

    export default ItemDetail;