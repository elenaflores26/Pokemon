import React from 'react'
import Tipo from './Tipo'
import "./DatosPokemon.css"


const DatosPokemon = ({url}) => {
  return (
    <div className=' sticky col-lg-3 mt-5  p-3 d-flex flex-column align-items-center'>
          <p className='col-12 text-end  fs-1 fw-bold text-success'>#1</p>
          <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+url+".png"} alt=""  className='col-lg-10 col-sm-7'/>
          <p>Ditto</p>
          <div className='d-flex col-12 justify-content-evenly  flex-wrap '  >
          <Tipo tipo={"normal"}/>
          <Tipo tipo={"planta"}/>
          <Tipo tipo={"fantasma"}/>
          </div>
        </div>
  )
}

export default DatosPokemon