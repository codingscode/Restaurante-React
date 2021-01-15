import './App.css'
import Cabecalho from './Cabecalho/Cabecalho'
import Rodape from './Rodape/Rodape'

export default function App() {

      return (
        <div >
            <Cabecalho />
            <div className="app-1">Oi React! Aplicação em Restaurante</div>
            <Rodape />
        </div>
      )
}
