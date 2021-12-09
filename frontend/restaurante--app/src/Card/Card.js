// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './Card.css'
/* import styled from 'styled-components' */



export default function Card({id, nome, preco_unidade, imagem, descricao, resumo_ind}) {

      const [quantidade, setQuantidade] = useState(0)
      // eslint-disable-next-line
      const [carrinho, setCarrinho] = useState({})
      const [clicado, setClicado] = useState(false)
      
     
      function valorQuantidade(operacao) {
          if (operacao === '+') {
              setQuantidade((q) => q += 1)
              setClicado(true)
          }
          if (operacao === '-' && quantidade > 0) {
              setQuantidade((q) => q -= 1)
          }
      }     
     
      
      function meu_carrinho(imagem_r, nome_r, preco_r, quantidade, clicado) {
          setClicado(clicado)
          let carrinho = {id: id, imagem: imagem_r, nome: nome_r, quantidade: quantidade, preco: preco_r,
                            valor: preco_r * quantidade, clicado: clicado}
          console.log(carrinho)
          if (carrinho.quantidade !== 0) {
              resumo_ind(carrinho)
              setClicado(clicado)
          }
      }
      

      let cor = clicado ? '#007CC7' : '#a28089'

     
      return (
          <div className="card--base" style={{border: `8px solid ${cor}`}} >
              <img src={`./images/${imagem}`} alt={imagem} className="imagem" />
              <div><strong>Nome: </strong>{nome}</div>
              <div><strong>Preço: </strong> R${preco_unidade}</div>
              <div><strong>Descrição: </strong>{descricao.substr(0, 150)}...</div>
              <div className="quantidade">
                   <strong>Quantidade: </strong><span>{quantidade}</span>
                  
                   <button onClick={() => valorQuantidade('-')} >-</button>
                   <button onClick={() => valorQuantidade('+')} >+</button>
              </div>
              <button onClick={() => meu_carrinho(imagem, nome, preco_unidade, quantidade, !clicado)} >Adicionar</button>
          </div>
      )
}

