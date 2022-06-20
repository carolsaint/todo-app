import express from 'express';
const app = express()

app.use(express.json())

//usuario controller
import {usuario} from './controllers/usuario-controller.js'; 
usuario(app); 
//tarefa controller
import {tarefa} from './controllers/tarefa-controller.js'; 
tarefa(app);



// //usuario model
// import {Usuario} from './models/usuario-model.js'
// // const novoAluno = new Usuario('Kassiane', 'kassi@', 'pipo')
// console.log(novoAluno)
// //tarefa model
// import {Tarefa} from './models/tarefa-model.js'
// const novaTarefa = new Tarefa('descricao teste', 'teste', 'ongoing', '20-6-2022');
// console.log(novaTarefa)


app.listen(3000, () => {
    console.log('rota ativada com get na port 3000')
})
