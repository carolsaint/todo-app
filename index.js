import express from 'express'
const app = express()

app.get('/usuario', (req, res) => {
    res.send('rota usuario')
})

app.get('/tarefa', (req, res) => {
    res.send('rota tarefa')
})

app.listen(3000, () => {
    console.log('rota ativada com get na port 3000')
})
