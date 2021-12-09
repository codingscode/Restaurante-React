// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './Carrinho.css'


export default function Carrinho({ resumo, funcao, pedidofinalizado, limpar, toggle }) {
     
     

     /* 
        {clicado: true, id: 75, imagem: "vinho_porto.jpg", nome: "Vinho do porto", preco: 4, quantidade: 2, valor: 8} 
        {clicado: true, id: 73, imagem: "s_laranja.jpg", nome: "Suco de laranja", preco: 3, quantidade: 1, valor: 3}
                 
       
     
     */


     function limparCarrinho() {
         limpar([])
     }

     function somaTotal(lista) {
         let soma = 0
         if (lista.length) {
            lista.map(cada => {
                soma += cada.valor
                return ''
            })
            return soma
         }
         return soma
     }

     function confirmarPedido(lista) {
         let pedido = []
         let momento = new Date()
         lista.map((cada) => {
             let nome_valor = `${cada.nome} _____________ R$ ${cada.valor}`
             pedido.push(`${nome_valor}`)
             //pedido.push(`${nome_valor} \n`)
             return ''
         }) 
         pedido.push(`momento : ${momento.getHours()}:${momento.getMinutes()}:${momento.getSeconds()} ${momento.getDate()}/${momento.getMonth()+1}/${momento.getFullYear()}`)
         console.log('finalizados: \n', pedido)
         pedidofinalizado(true, pedido)
         toggle()
         limparCarrinho()
     }


     return (
         <div className="carrinho--base">
             <div >
                {resumo.length ? 
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
                <div></div><br></br>
                <div>Total: R$ {somaTotal(resumo)}</div>
                <button onClick={() => confirmarPedido(resumo)} >Confirmar Itens</button>
             </div>
         </div>
     )
}
