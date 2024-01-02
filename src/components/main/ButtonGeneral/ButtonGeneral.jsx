import React from 'react'
import '../ButtonGeneral/_buttongeneral.scss'

function ButtonGeneral ({ text, onClick }) {
  return (
    <button className='buttonGeneral'  onClick={onClick}>
    {text}
  </button>
  )
}

export default ButtonGeneral
