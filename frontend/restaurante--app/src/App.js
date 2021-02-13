import './App.css'
import Cabecalho from './Cabecalho/Cabecalho'
import Rodape from './Rodape/Rodape'
import Card from './Card/Card'
import { useEffect, useState } from 'react'
import { trazerdados, setarDados } from './api.js'
import Carrinho from './Carrinho/Carrinho'
import PedidosFeitos from './Pedidos/Pedidos'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import Modal from './Modal/Modal'
import UsarModal from './Modal/UsarModal'
import styled from 'styled-components'



function App() {
      const [produtos, setProdutos] = useState({})
      const [carregando, setCarregando] = useState(true)
      let [carrinho, setCarrinho] = useState([])
      const [cardClicado, setCardClicado] = useState(false)
      const [pedidosFeitos, setPedidosFeitos] = useState([])
      const { estaMostrando, toggle } = UsarModal()
      

      useEffect( () => {
          console.log('começo')
        
          trazerdados('http://localhost:8081', 'restaurante_produtos')
                  .then( (response) => { 
                      setProdutos(response.data)
                      setCarregando(false)
                  })
                  .catch(() => {
                      console.log('Houve erro')
                  })

          trazerdados('http://localhost:8081', 'pedidos_realizados')
                  .then(resp => {
                      setPedidosFeitos(resp.data)
                  })
                  .catch(() => {
                      console.log('Erro em Pedidos feitos')
                  })
        
          console.log('fim')
          
      }, [])

      

      function cardSelecionado() {
          setCardClicado(true)
      }
    
      if (carregando) {
          return (<div >Loading...</div>)
      }

      function enviarPedido(confirmar, pedido) {
          if (confirmar) {
             setarDados(pedido)
          }
      }
      
      function colocar(item) {
          if (carrinho.every(cada => cada.imagem !== item.imagem)) {
             setCarrinho(cada => [...cada, item])
             setCardClicado(true)
             console.log('********', carrinho)
             console.log('item:->', item)
          }
         
      }

      function alteracoes(operacao, filtro) {
          if (operacao === '+') {
              setCarrinho(carrinho.map(cada => {
                  if (cada.imagem === filtro) {
                      cada = {...cada, quantidade: cada.quantidade += 1, valor: cada.preco * cada.quantidade}
                  }
                  return cada
              }))
          }
          if (operacao === '-') {
              setCarrinho(carrinho.map(cada => {
                  if ((cada.imagem === filtro) && cada.quantidade > 0) {
                      cada = {...cada, quantidade: cada.quantidade -= 1, valor: cada.preco * cada.quantidade}
                  }
                  return cada
              }))
          }
          if (operacao === 'remover') {
              setCarrinho(carrinho.filter(cada => cada.imagem !== filtro))
              console.log('aqui ó', carrinho)
          }

      }

      
        
      console.log('---', carrinho)
      console.log('pedidosFeitos: ', pedidosFeitos)

      const GradeContainer = styled.div`
          display: grid;
          grid-template-columns: auto auto auto auto;
          grid-gap: 10px;
          background-color: #ffe284;
          padding: 10px;
          & > div {
            background-color: rgba(255, 255, 255, 0.8);
            border: 5px solid ${cardClicado ? 'blue' : 'chocolate'} ;  
            text-align: center;
            font-size: 30px;
            border-radius: 10px;    
          }
      `


      return (
        <>
        <Router>
            <div className="painel--geral">
                <Cabecalho Link={Link} />
                <Switch>
                    <div className="painel--geral_meio">
                        <div className="titulo">Restaurante Panela de Barro</div>
                        <Route exact path="/cardapio" >
                            <div>Comidas</div>
                            <GradeContainer>
                                {produtos.comidas.map((cada) => <Card key={cada.id} id={cada.id}
                                                    nome={cada.nome} preco_unidade={cada.preco_unidade}
                                                    imagem={cada.imagem_endereco} descricao={cada.descricao} 
                                                    resumo_ind={(objeto) => colocar(objeto)}  />)}
                            </GradeContainer>
                            <div>Sobremesas</div>
                            <GradeContainer>
                                {produtos.sobremesas.map((cada) => <Card key={cada.id} id={cada.id}
                                                    nome={cada.nome} preco_unidade={cada.preco_unidade}
                                                    imagem={cada.imagem_endereco} descricao={cada.descricao} 
                                                    resumo_ind={(objeto) => colocar(objeto)}  />)}
                            </GradeContainer>
                            <div>Bebidas</div>
                            <GradeContainer>
                                {produtos.bebidas.map((cada) => <Card key={cada.id} id={cada.id}
                                                    nome={cada.nome} preco_unidade={cada.preco_unidade}
                                                    imagem={cada.imagem_endereco} descricao={cada.descricao} 
                                                    resumo_ind={(objeto) => colocar(objeto)}  />)}
                            </GradeContainer>
                        </Route>
                        <Route path="/carrinho" >
                            <Carrinho resumo={carrinho} clicado={cardClicado} funcao={(operacao, quem) => alteracoes(operacao, quem)}
                                        pedidofinalizado={(confirmar, pedido) => enviarPedido(confirmar, pedido)} 
                                        limpar={(valor) => setCarrinho(valor)} toggle={toggle} />
                        </Route>
                        <Route path="/pedidos" >
                            <PedidosFeitos feitos={pedidosFeitos} />
                        </Route>
                    </div>
                </Switch>
                <Rodape />
            </div>
        </Router>
        <Modal estaMostrando={estaMostrando} esconder={toggle} />
        </>
      )
}

export default App