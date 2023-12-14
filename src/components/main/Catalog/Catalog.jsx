import React from 'react'
import CardHome from '../CardListIndex'
import './_catalog.scss'

function Catalog() {
  return (
    <div className="catalogContainer">
        <div className="productsContainer">
            <CardHome/>
            <CardHome/>
            <CardHome/>
            <CardHome/>
            <CardHome/>
            <CardHome/>
        </div>
    </div>
  )
}

export default Catalog