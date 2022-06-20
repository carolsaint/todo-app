let id = 0;
class Usuario {
    constructor(nome, email, senha){
        this.id = id++;
        this.nome = nome;
        this.email = email;
        this.senha = this.validarSenha(senha);
    }

validarSenha(senha){
    if(senha.length <= 5 ){
        return senha
    } else {
        throw new Error("Senha deve conter mais que 5 caracteres.")
    }
};
}

export{Usuario};
