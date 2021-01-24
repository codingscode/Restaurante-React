import React from 'react'
import './Carrinho.css'


export default function Carrinho({resumo}) {
    
     console.log('%%%%%%%%', resumo)
 
     /* 
        0: {imagem: "batata_frita.jpg", nome: "Batata Frita", quantidade: 1, preco: 8, valor: 8}
        1: {imagem: "salada_alface.jpg", nome: "Salada de Alface", quantidade: 4, preco: 5, valor: 20}
        2: {imagem: "farofa.jpg", nome: "Farofa", quantidade: 2, preco: 5, valor: 10}
        3: {imagem: "feijao_preto.jpg", nome: "Feijão preto", quantidade: 1, preco: 8, valor: 8}
        4: {imagem: "feijoada.jpg", nome: "Feijoada", quantidade: 1, preco: 11, valor: 11}
        5: {imagem: "bisteca.jpg", nome: "Bisteca Assada", quantidade: 1, preco: 14, valor: 14}
     
     
     */







     return (
         <div className="carrinho--base">
             <div>Aqui é o carrinho</div>
             <div >
                 {resumo.map(cada => (
                      <div className="carrinho--pontos">
                            <img src={`./images/${cada.imagem}`} alt={cada.imagem} className="imagem--carrinho" />
                            <div>
                                <div>nome: {cada.nome}</div>
                                <div>valor: R$ {cada.preco}</div>
                            </div>
                            <div className="carrinho--quantidade">
                                <div>1</div>
                                <div>-</div>
                                <div>+</div>
                                <button>remover</button>
                            </div>
                      </div>

                 ))}

             </div>
             <div>Confirmar pedidos</div>
         </div>
     )
}
