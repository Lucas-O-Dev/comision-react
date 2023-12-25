
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import './_pokeapi.scss'

const PokeApi = () => {
    const [id, setId] = useState(1);
    const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id]);

    const handleAnterior = () => {
        id > 1 && setId(id - 1);
    };

    const handleSiguiente = () => {
        setId(id + 1);
    };

    return (

        <div className="containerOtherProducts">
            <p>Would you like to see other products?</p>
            <hr />
            {pokemon && (
                <>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </>)}
                <div className="containerButtonApi">
                    <button className="btn-api" onClick={handleAnterior}>Anterior</button>
                    <button className="btn-api" onClick={handleSiguiente}>Siguiente</button>
                </div>
        </div>
    );
};

export default PokeApi;
