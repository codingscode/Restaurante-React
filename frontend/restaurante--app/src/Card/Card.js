import React, { useEffect, useState } from 'react'
import './Card.css'



export default function Card({id, nome, preco_unidade, imagem, descricao, resumo_ind}) {

      const [quantidade, setQuantidade] = useState(0)
      const [carrinho, setCarrinho] = useState({})
      
     
      function valorQuantidade(operacao) {
          if (operacao === '+') {
              setQuantidade((q) => q += 1)
          }
          if (operacao === '-' && quantidade > 0) {
              setQuantidade((q) => q -= 1)
          }
      }     
     
      
      function meu_carrinho(imagem_r, nome_r, preco_r, quantidade) {
          let id = 1

          let carrinho = {imagem: imagem_r, nome: nome_r, quantidade: quantidade, valor: preco_r * quantidade}
          id += 1
          console.log(carrinho)
          resumo_ind(carrinho)
          /* resumo_ind.push(carrinho) */
          return carrinho
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
              <button onClick={() => meu_carrinho(imagem, nome, preco_unidade, quantidade)} >Adicionar</button>
          </div>
      )
}

