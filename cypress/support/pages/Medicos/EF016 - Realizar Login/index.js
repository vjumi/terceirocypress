//ações de interação com a página
const el = require ('./elements').ELEMENTS
class Login{

    acessarLogin(){
        cy.visit('')
    }

    preencherLogin(){
        cy.get(el.usuario).type("30000")
        cy.get(el.uf).select("DF")
        cy.get(el.senha).type("Senha321")
        cy.get(el.botaoLogin).click()
    }

}

export default new Login ();