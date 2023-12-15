import React from 'react';
import './_cardhome.scss'

export const CardHome = (props) => {
    const { title, desc, cost, imageSrc } = props
    return ( 
            <div className="conteiner-card">
            <h2 className='title-card-home'>{title}</h2>
            <p className='desc-card-home'>{desc}</p>
            <p className='desc-card-home'>{cost}</p>
            <img src={imageSrc} alt="card-image" className="img-cardhome" />
            </div>
        );
}

export default CardHome;