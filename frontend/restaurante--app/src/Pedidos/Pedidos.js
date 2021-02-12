import React from 'react'
import './Pedidos.css'


export default function PedidosFeitos({ feitos }) {
     


     console.log('feitos_dsadsad: ', feitos)
    
     return(
         <div className="pedidos--base">
             <div className="titulo1" >Pedidos feitos</div>
             
             <div className="pedidos--tela--individual">
                {feitos.length !== 0 ? 
                feitos.map((cada, indice) => (
                    <div className="pedidos--cada" key={indice} >
                        <div>Pedido número {indice + 1} :</div>
                        {cada.pedido.map((cada2, indice2) => (
                           <div key={indice2} >
                               {cada2}
                           </div>
                        ))}
                    </div>
                ))
                :
                <div className="pedidos--cada" >Você não possui pedidos feitos ainda</div>
                }
             </div>
             
             <div>asdsad</div>
             <div>hfgohf</div>
             <div>tjegeri</div>

         </div>
     )
}
