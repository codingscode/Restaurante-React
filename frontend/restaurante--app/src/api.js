import axios from 'axios'


export let valor = axios.get('http://localhost:8081/restaurante_produtos').then(res => res.data)


export async function trazerdados(fonte, sessao) {
    return await axios.get(`${fonte}/${sessao}`)
}

export async function setarDados(valor) {
    return await axios.post('http://localhost:8081/pedidos_realizados', {valor})
}
