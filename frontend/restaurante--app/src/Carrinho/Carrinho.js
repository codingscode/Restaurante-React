import React, { useEffect, useState } from 'react'
import './Carrinho.css'


export default function Carrinho({ resumo, clicado, funcao }) {
     
     

     /* 
        {clicado: true, id: 75, imagem: "vinho_porto.jpg", nome: "Vinho do porto", preco: 4, quantidade: 2, valor: 8} 
        {clicado: true, id: 73, imagem: "s_laranja.jpg", nome: "Suco de laranja", preco: 3, quantidade: 1, valor: 3}
                 
       
     
     */

     function somaTotal(lista) {
         let soma = 0
         if (lista.length) {
            lista.map(cada => {
                soma += cada.valor
            })
            return soma
         }
         return soma
     }


     return (
         <div className="carrinho--base">
             <div>Aqui é o carrinho</div>
             <div >
                {clicado ? 
                resumo.map(cada => (
                    <div className="carrinho--pontos" key={cada.imagem} > {/* key={cada.imagem} */}
                          <img src={`./images/${cada.imagem}`} alt={cada.imagem} className="imagem--carrinho" />
                          <div>
                              <div>nome: {cada.nome}</div>
                              <div>valor: R$ {cada.valor}</div>
                          </div>
                          <div className="carrinho--quantidade">
                              <div>{cada.quantidade}</div>
                              <div onClick={() => funcao('-', cada.imagem)} >-</div>
                              <div onClick={() => funcao('+', cada.imagem, )} >+</div>
                              <button onClick={() => funcao('remover', cada.imagem, )} >remover</button>
                          </div>
                    </div>
                ))
                :
                'Seu carrinho está vazio'
                }
             </div>
             <div>
                <div>Total: R$ {somaTotal(resumo)}</div>
                <div>Confirmar pedidos</div>
             </div>
         </div>
     )
}
