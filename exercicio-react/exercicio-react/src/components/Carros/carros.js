import React from 'react'
import Carrao from '../img/carro de luxo.jpg'

export default function Carros(){
    return(
        <>
            <img src={Carrao} alt="Carro Tunado" />

            <h2>Lista de Carros</h2>
            <br/>
            <ul>
                <li>Fusca</li>
                <li>Camaro</li>
                <li>Mc Laren</li>
                <li>BMW</li>
            </ul>
        </>
    )
}