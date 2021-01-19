import './App.css'
import Cabecalho from './Cabecalho/Cabecalho'
import Rodape from './Rodape/Rodape'
import Card from './Card/Card'


export default function App() {

      

      return (
        <div className="painel--geral">
            <Cabecalho />
            <div className="painel--geral_meio">
                <div className="titulo">Restaurante Panela de Barro</div>
                <div className="grid-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                                        
                </div>
                
            </div>
            <Rodape />
        </div>
      )
}
