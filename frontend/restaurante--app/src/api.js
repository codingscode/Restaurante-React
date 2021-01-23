
const axios = require('axios')

export let valor = axios.get('http://localhost:8081/restaurante_produtos').then(res => res.data)


export async function trazerdados(fonte, sessao) {
    return await axios.get(`${fonte}/${sessao}`)
}











