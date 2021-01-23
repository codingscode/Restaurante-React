import React, { useEffect, useState } from 'react'
import './Card.css'



export default function Card({id, nome, preco_unidade, imagem, descricao}) {

      const [quantidade, setQuantidade] = useState(0)
      
           
      

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
              <img src={`./images/${imagem}`} alt={imagem} className="imagem" />
              <div>Nome: {nome}</div>
              <div>Preço: R$ {preco_unidade}</div>
              <div>Descrição: {descricao.substr(0, 150)}...</div>
              <div className="quantidade">
                   Quantidade: <span>{quantidade}</span>
                  
                   <button onClick={() => valorQuantidade('-')} >-</button>
                   <button onClick={() => valorQuantidade('+')} >+</button>
              </div>
              <button>Adicionar</button>
          </div>
      )
}

