const jsonServer = require('json-server')
const servidor = jsonServer.create()
const router = jsonServer.router('dados.json')
const middlewares = jsonServer.defaults()

const porta = process.env.PORT || 8081
console.log(process.env.PORT)

servidor.use(middlewares)
servidor.use(router)
servidor.listen(porta, () => {
    console.log(`JSON Server está executando em ${porta}`)
}) 