import React from 'react'
import './Carrinho.css'


export default function Carrinho({resumo}) {
    
     console.log('%%%%%%%%', resumo)

     return (
         <div className="carrinho--base">
             <div>Aqui é o carrinho</div>
             <div className="carrinho--pontos">
                 <img src="./images/pamonha.jpg" alt="algo" className="imagem--carrinho" />
                 <div>
                    <div>nome: pamonha</div>
                    <div>valor: R$ 3</div>
                 </div>
                 <div className="carrinho--quantidade">
                     <div>1</div>
                     <div>-</div>
                     <div>+</div>
                     <button>remover</button>
                 </div>
             </div>
             <div>Confirmar pedidos</div>
         </div>
     )
}
