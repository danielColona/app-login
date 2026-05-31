// Preciso de uma função capaz de receber duas entradas: Login e Senha. 
// Ela deverá navegar em um lista pre-existente, com 3 usuários 
// e então retornar o texto “Logado com sucesso.” 
// caso exista um usuário com login e senha iguais aos informados.
// Caso não exista um usuário com login e senha informados, 
// uma mensagem dizendo “Usuário não encontrado.” deverá ser exibida.

const usuarios = [{
  nome: 'Daniel Colona',
  login: 'danielcolona',
  senha: 1234
},
{
  nome: 'Ariane Nascimento',
  login: 'arianenascimento',
  senha: 4321
},
{
  nome: 'IsaacNascimento',
  login: 'isaacnascimento',
  senha: 1324
}]


export function autenticarAcesso(login, senha) {
    
    let resultado = 'Usuário não encontrado.';
    
    usuarios.forEach(function(usuario){
        if(usuario.login == login && usuario.senha == senha){  
            resultado = 'Logado com Sucesso';
        }
    });
    
    return resultado;
}

console.log(autenticarAcesso('danielcolona', 1234));

// Segunda opção de função com for....of
export function realizarLogin(login, senha) {
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            return 'Logado com Sucesso';
        }
    }
    return 'Usuário não encontrado.';
}

console.log(realizarLogin('danielcolona', 1234));
