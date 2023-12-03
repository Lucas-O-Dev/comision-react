import React from 'react'
import {CardHome} from './CardListIndex'
import BackgroundHome from './BackgroundHome'
import myImage1 from '../assets/esmaltes1.jpg';
import myImage2 from '../assets/esmaltes2.jpg';
import myImage3 from '../assets/esmaltes3.jpg';
import '../sass/components/_itemlistcontainer.scss'

const ItemListContainer = ({greeting}) => {
    return ( 
        <main className="main-home">
            <BackgroundHome/>
            <div className="conteiner-greeting">
            <p className='greeting'>{greeting}</p>
            </div>
        <section className="list-container">
        <div className="cards-home">
        <CardHome title="Title" desc="Desc" cost="$ 9.50"     imageSrc={myImage1}/>
        <CardHome title="Title2" desc="Desc2" cost="$ 10.50"  imageSrc={myImage2}/>
        <CardHome title="Title3" desc="Desc3" cost="$ 11.20"  imageSrc={myImage3}/>
        </div>
        </section>
        </main>
        );
}

export default ItemListContainer;