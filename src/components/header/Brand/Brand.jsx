import React from 'react'
import myImage from './brandlogo.png'
import './_brand.scss'
import { Link } from 'react-router-dom';

const Brand = () => {

    return ( 
        <>
            <div className="container-brand">
                <Link to="/">
            <img src={myImage} alt="logo-item" className='brandLogo'/>
                </Link>
            </div>
        </>
    );
}

export default Brand;