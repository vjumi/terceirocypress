const el = require ('./elements').ELEMENTS
const user = require ('./credenciais').USUARIO

class Paciente{

    acessarPaciente(){
        cy.get(el.botaoPaciente).click()
    }

    pesquisarPaciente(){
        cy.get(el.nome).type(user.nome)
        cy.wait(1000)
        cy.get('[title="263"]').contains(user.nome)
        cy.get('h3.col-md-12').contains('Pacientes')
        cy.get(el.nome).clear()
        cy.get(el.cpf).type(user.cpf)
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains(user.cpf)
        cy.wait(1000)
        cy.get(el.cpf).clear()
        cy.get(el.email).type(user.email)
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains(user.email)
        cy.wait(1000)
        cy.get(el.email).clear()
        cy.get(el.telefone).type(user.telefone)
        cy.get('tbody > :nth-child(1) > :nth-child(4)').contains(user.telefone)
        cy.wait(1000)
        cy.get(el.telefone).clear() 
    }

}

export default new Paciente ();