import {bd} from '../infra/bd.js'
import {Usuario} from '../models/usuario-model.js'


const usuario=(app)=>{
    app.get("/usuario",(req,res)=>{
      res.send({"MeuBancoAluno:" : bd.usuario})
    })
    app.post("/usuario",(req,res)=>{
      console.log(req.body)
      const novoUsuario = new Usuario(req.body.nome, req.body.email, req.body.senha);
      bd.usuario.push(novoUsuario);
      // res.send("rota tarefa POST")
      res.send({"Novo usuario" : novoUsuario})
    })
  }
  export {usuario}
  


