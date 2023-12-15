import React from "react";
import ButtonNewsLetter from "../ButtonNewsLetter/ButtonNewsLetter"
import './_newsletter.scss'

const NewsLetter = () => {
    return ( 
        <div className="newsletter-conteiner">
            <p>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <input type="text" />
            <ButtonNewsLetter />
        </div>
        );
}

export default NewsLetter;