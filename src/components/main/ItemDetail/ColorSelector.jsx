import React from "react"

const ColorSelector = ({setColor}) => {

    const handleSelect = (event) => {
        setColor (event.target.value)
    }


    return (
        <div className="containerColorSelector">
            <select onChange={handleSelect}>
                <option value="Negro">Negro</option>
                <option value="Gris">Gris</option>
                <option value="Azul">Azul</option>
            </select>
        </div>
    )
}

export default ColorSelector