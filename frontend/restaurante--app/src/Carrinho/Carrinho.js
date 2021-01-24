import React, { useEffect, useState } from 'react'
import './Carrinho.css'


export default function Carrinho({ resumo, clicado, funcao }) {
     //const [listaPedidos, setListaPedidos] = useState([...resumo])

     
     // cada => [...cada, item]
     //setListaPedidos(cada => [...cada, resumo])
     /* console.log(listaPedidos) */
     

     /* 
        0: {imagem: "vinho_porto.jpg", nome: "Vinho do porto", quantidade: 1, preco: 4, valor: 4}
        1: {imagem: "agua_c.jpg", nome: "Água de coco", quantidade: 2, preco: 4.2, valor: 8.4}
        2: {imagem: "caipirinha.jpg", nome: "Caipirinha", quantidade: 4, preco: 4.5, valor: 18}
     
     */

     /* useEffect(() => {
         setListaPedidos(cada => [...cada, resumo])
     }, []) */

     

      //console.log('listaPedidos:: ', listaPedidos)


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
                              <div>-</div>
                              <div>+</div>
                              <button onClick={() => funcao(cada.imagem)} >remover</button>
                              {/* <button onClick={() => alteracoes('remover', cada.imagem)} >remover</button> */}
                          </div>
                    </div>

                ))
                 
                 :
                 
                 'nao'
                 
                 }
                 

             </div>
             <div>Confirmar pedidos</div>
         </div>
     )
}
