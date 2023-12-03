import React from 'react'
import myImage from '../assets/icons8-v-100.png'
import '../sass/styles.css'

const Brand = () => {

    return ( 
        <>
            <div className="container-brand">
            <a href="#">
                <img src={myImage} alt="logo-item" width='50' height='50'/>
            </a>
            </div>
        </>
    );
}

export default Brand;