import { autenticarAcesso } from "../src/acessoApp.js";
import assert from 'node:assert'

describe('Testes de Autenticação no App', function() {

    it('Teste de Login e Senha corretos', function(){
        //Arrange
        const login = 'danielcolona';
        const senha = 1234;
        //Act
        const resultado = autenticarAcesso(login, senha)
        //Assert
        assert.equal(resultado, 'Logado com Sucesso')
    })

    it('Teste de Login e Senha Incorretos', function(){
        //Arrange
        const login = 'danielcolona';
        const senha = 4321;
        //Act
        const resultado = autenticarAcesso(login, senha)
        //Assert
        assert.equal(resultado, 'Usuário não encontrado.')
    })
})