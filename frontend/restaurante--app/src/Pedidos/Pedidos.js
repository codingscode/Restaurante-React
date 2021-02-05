import React from 'react'
import './Pedidos.css'


export default function PedidosFeitos({ feitos }) {
     


     console.log('feitos_dsadsad: ', feitos)
    
     return(
         <div className="pedidos--base">
             <div>Pedidos feitos</div>
             
             <div className="pedidos--tela--individual">
                {feitos.map((cada, indice) => (
                    <div className="pedidos--cada">
                        <div>Pedido número {indice + 1} :</div>
                        {cada.map((cada2, indice2) => (
                           <div key={indice2}>
                               {cada2}
                           </div>
                        ))}
                    </div>
                ))}  
             </div>
             
             <div>asdsad</div>
             <div>hfgohf</div>
             <div>tjegeri</div>

         </div>
     )
}