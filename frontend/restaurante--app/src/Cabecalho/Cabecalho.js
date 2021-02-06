import React from 'react'
import './Cabecalho.css'
import { Link } from 'react-router-dom'



export default function Cabecalho() {


      return (
          <nav className="cabecalho_base">
                
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

{/* <div className="cabecalho_inf2">meu cabeçalho</div>
                        <div className="cabecalho_inf2">meu cabeçalho</div>
                        <div className="cabecalho_inf2">meu cabeçalho</div>
                        <div className="cabecalho_inf2">meu cabeçalho</div>
                        <div className="cabecalho_inf2">meu cabeçalho</div>
                        <div className="cabecalho_inf2">meu cabeçalho</div> */}
