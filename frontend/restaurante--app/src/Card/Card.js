import React, { useEffect, useState } from 'react'
import './Card.css'

/* import * as k from '../images' */


export default function Card() {

      // ver:  https://medium.com/@pylnata/import-and-preloading-of-bunch-of-images-in-react-app-c82068d26247

      

      let valor = 'vatapa.jpg'
      let valor2 = 'feijoada.jpg'
     
      

      return (
          <div className="card--base">
              <img src="./images/sardinha.jpg" alt="sardinha" className="imagem" />
              <img src={`./images/${valor}`} alt="sardinha" className="imagem" />
              <img src={`./images/${valor2}`} alt="sardinha" className="imagem" />
              
              <div>Nome</div>
              <div>Preço</div>
              <div>Descrição</div>
              <div>

              </div>
              <button>Adicionar</button>
          </div>
      )
}

