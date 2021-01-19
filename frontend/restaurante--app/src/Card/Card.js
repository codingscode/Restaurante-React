import React, { useEffect, useState } from 'react'
import './Card.css'

/* import * as k from '../images' */


export default function Card() {

      const [quantidade, setQuantidade] = useState(0)
      
      let imagem1 = 'sardinha.jpg'
      
      

      function valorQuantidade(operacao) {
          
          if (operacao === '+') {
              setQuantidade((q) => q += 1)
          }
          if (operacao === '-' && quantidade > 0) {
              setQuantidade((q) => q -= 1)
          }
          
      }     
      

      return (
          <div className="card--base">
              <img src={`./images/${imagem1}`} alt="sardinha" className="imagem" />
              <div>Nome: </div>
              <div>Preço: </div>
              <div>Descrição: </div>
              <div className="quantidade">
                   Quantidade: <span>{quantidade}</span>
                  
                   <button onClick={() => valorQuantidade('-')} >-</button>
                   <button onClick={() => valorQuantidade('+')} >+</button>
              </div>
              <button>Adicionar</button>
          </div>
      )
}

