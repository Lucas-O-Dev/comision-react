import React from 'react'
import {CardHome} from './CardListIndex'
import myImage1 from '../assets/esmaltes1.jpg';
import myImage2 from '../assets/esmaltes2.jpg';
import myImage3 from '../assets/esmaltes3.jpg';
import Catalog from './Catalog/Catalog';
import InfoProducts from './InfoProducts/InfoProducts';
import '../sass/components/_itemlistcontainer.scss'

const ItemListContainer = ({greeting}) => {
    return ( 
        <main className="main-home">
            <div className="conteiner-greeting">
            <p className='greeting'>{greeting}</p>
            </div>
        <section className="list-container">
        <div className="cards-home">
        <CardHome title="Pollié Esmalte" desc="Color Black" cost="$ 9.50"     imageSrc={myImage1}/>
        <CardHome title="Pollié Esmalte" desc="Color Aqua" cost="$ 10.50"  imageSrc={myImage2}/>
        <CardHome title="Pollié Esmalte" desc="Color Red" cost="$ 11.20"  imageSrc={myImage3}/>
        </div>
        </section>
        <InfoProducts/>
        <Catalog/>
        </main>
        );
}

export default ItemListContainer;