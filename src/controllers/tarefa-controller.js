import {bd} from '../infra/bd.js'
import {Tarefa} from '../models/tarefa-model.js'


const tarefa=(app)=>{
    app.get("/tarefa",(req,res)=>{
      res.send("rota tarefa GET")
    })
    app.post("/tarefa",(req,res)=>{
      console.log(req.body)
      const novaTarefa = new Tarefa(req.body.descricao, req.body.titulo, req.body.status, req.body.dataCriacao);
      bd.usuario.push(novaTarefa);
      // res.send("rota tarefa POST")
      res.send({"Nova tarefa" : novaTarefa})
    })
  }
  export {tarefa}
  