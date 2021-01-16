import './App.css'
import Cabecalho from './Cabecalho/Cabecalho'
import Rodape from './Rodape/Rodape'

export default function App() {

      return (
        <div className="app-1">
            <Cabecalho />
            <div className="app-2">
                <div >Restaurante XXX</div>
                <div >Oi React! Aplicação em Restaurante</div>
            </div>
            <Rodape />
        </div>
      )
}
