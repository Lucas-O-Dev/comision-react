import React from 'react'
import myImage from '../assets/icons8-v-100.png'
import '../sass/styles.css'
import { Link } from 'react-router-dom';

const Brand = () => {

    return ( 
        <>
            <div className="container-brand">
                <Link to="/">
            <img src={myImage} alt="logo-item" width="50" height="50" />
                </Link>
            </div>
        </>
    );
}

export default Brand;