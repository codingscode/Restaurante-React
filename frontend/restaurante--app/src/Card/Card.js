import React from 'react'
import './Card.css'
import sardinha from '../images/sardinha.jpg'


export default function Card() {


      return (
          <div className="card--base">
              <img src={sardinha} alt="sardinha" className="imagem" />
              <div>Nome</div>
              <div>Preço</div>
              <div>Descrição</div>
              <div>

              </div>
              <button>Adicionar</button>
          </div>
      )
}

