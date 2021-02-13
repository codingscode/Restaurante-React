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
     
      
      function meu_carrinho(imagem_r, nome_r, preco_r, quantidade, clicado) {
          let carrinho = {id: id, imagem: imagem_r, nome: nome_r, quantidade: quantidade, preco: preco_r,
                            valor: preco_r * quantidade, clicado: clicado}
          console.log(carrinho)
          if (carrinho.quantidade !== 0) {
              resumo_ind(carrinho)
          }
      }

      

      return (
          <div className="card--base">
              <img src={`./images/${imagem}`} alt={imagem} className="imagem" />
              <div><strong>Nome: </strong>{nome}</div>
              <div><strong>Preço: </strong> R${preco_unidade}</div>
              <div><strong>Descrição: </strong>{descricao.substr(0, 150)}...</div>
              <div className="quantidade">
                   <strong>Quantidade: </strong><span>{quantidade}</span>
                  
                   <button onClick={() => valorQuantidade('-')} >-</button>
                   <button onClick={() => valorQuantidade('+')} >+</button>
              </div>
              <button onClick={() => meu_carrinho(imagem, nome, preco_unidade, quantidade, true)} >Adicionar</button>
          </div>
      )
}

