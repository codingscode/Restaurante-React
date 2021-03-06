import React from 'react'
import './Cabecalho.css'



export default function Cabecalho({ Link }) {


      return (
          <nav className="cabecalho_base">
             <img src="./images/food.svg" alt="icone" />   
             <ul className="cabecalho_inf1">
                <li>
                  <Link to="/">Início</Link>
                </li>
                <li>
                  <Link to="/cardapio">Ver Cardápio</Link>
                </li>
                <li>
                  <Link to="/carrinho">Carrinho</Link>
                </li>
                <li>
                  <Link to="/pedidos">Pedidos</Link>
                </li>      
             </ul>    
          </nav>
      )
}

