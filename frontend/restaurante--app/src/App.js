import './App.css'
import Cabecalho from './Cabecalho/Cabecalho'
import Rodape from './Rodape/Rodape'
import Card from './Card/Card'
import { useEffect, useState } from 'react'
import { trazerdados, valor } from './api.js'



function App() {
     const [produtos, setProdutos] = useState({})
     const [carregando, setCarregando] = useState(true)
    
    const link = 'http://localhost:8081'
      

    useEffect( () => {
        console.log('começo')
        
        trazerdados(link, 'restaurante_produtos')
                .then( (response) => { 
                    setProdutos(response.data)
                    setCarregando(false)
                })
                .catch(() => {
                    console.log('Houve erro')
                })
        
        console.log('fim')
          
    }, [])

    
    
    
    console.log('*', produtos)
    console.log('**', produtos.bebidas)
    console.log('***', produtos.comidas)
    console.log('****', produtos.sobremesas)
    console.log('---', valor)
    
    
    
      if (carregando) {
          return (<div >Loading...</div>)
      }


      return (
        <div className="painel--geral">
            <Cabecalho />
            <div className="painel--geral_meio">
                <div className="titulo">Restaurante Panela de Barro</div>
                <div className="grid-container">
                   {produtos.comidas.map((cada) => <Card id={cada.id}
                                    nome={cada.nome} preco_unidade={cada.preco_unidade}
                                    imagem={cada.imagem_endereco} descricao={cada.descricao} />)}
                    
                    
                </div>
                
            </div>
            <Rodape />
        </div>
      )
}

export default App