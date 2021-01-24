import './App.css'
import Cabecalho from './Cabecalho/Cabecalho'
import Rodape from './Rodape/Rodape'
import Card from './Card/Card'
import { useEffect, useState } from 'react'
import { trazerdados, valor } from './api.js'
import Carrinho from './Carrinho/Carrinho'



function App() {
     const [produtos, setProdutos] = useState({})
     const [carregando, setCarregando] = useState(true)
     let [carrinho, setCarrinho] = useState([])

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

    
    
      if (carregando) {
          return (<div >Loading...</div>)
      }

      
      function colocar(item) {
          
          setCarrinho(cada => [...cada, item])

          console.log('********', carrinho)
      }
        
      console.log('---', carrinho)

      return (
        <div className="painel--geral">
            <Cabecalho />
            <div className="painel--geral_meio">
                <div className="titulo">Restaurante Panela de Barro</div>
                <div>Comidas</div>
                <div className="grid-container">
                   {produtos.comidas.map((cada) => <Card key={cada.id} id={cada.id}
                                    nome={cada.nome} preco_unidade={cada.preco_unidade}
                                    imagem={cada.imagem_endereco} descricao={cada.descricao} resumo_ind={(objeto) => colocar(objeto)} />)}
                </div>
                <div>Sobremesas</div>
                <div className="grid-container">
                   {produtos.sobremesas.map((cada) => <Card key={cada.id} id={cada.id}
                                    nome={cada.nome} preco_unidade={cada.preco_unidade}
                                    imagem={cada.imagem_endereco} descricao={cada.descricao} resumo_ind={(objeto) => colocar(objeto)} />)}
                </div>
                <div>Bebidas</div>
                <div className="grid-container">
                   {produtos.bebidas.map((cada) => <Card key={cada.id} id={cada.id}
                                    nome={cada.nome} preco_unidade={cada.preco_unidade}
                                    imagem={cada.imagem_endereco} descricao={cada.descricao} resumo_ind={(objeto) => colocar(objeto)} />)}
                </div>
                <Carrinho resumo={carrinho}/>
            </div>
            <Rodape />
        </div>
      )
}

export default App