//ações de interação com a página
const el = require ('./elements').ELEMENTS
class CadastrarReceitaSimples{

    CadastrarReceitaSimples(){

        cy.get(el.botaoNovaReceitaSimples).click()
        cy.wait(2000)
        cy.get(el.preencherPaciente).type('056.041.791-83{downarrow}{enter}')
        cy.get(el.preencherNomeMedicamento).type('medicamento{downarrow}{enter}')
        cy.get(el.preencherPosologia).type('Vacina {downarrow}{enter}')
        cy.get(el.preencherDuracaoTratamento).type('5')
        cy.get(el.preencherObservacao).type('Automatizadoh')
        cy.get(el.preencherNomeLocalAtendimento).type('Santa Marta{downarrow}{enter}')
        cy.get(el.botaoSalvarMedicamento).click()
        cy.get(el.botaoSalvar).click({force : true})
        cy.get(el.mensagemSucesso).contains('Registro salvo com sucesso!')

        

    }


    CadastrarReceitaSimplesMassaExclusao(){

        cy.get(el.botaoNovaReceitaSimples).click()
        cy.wait(3000)
        cy.get(el.preencherPaciente).type('512.898.130-43{downarrow}{enter}')
        cy.get(el.preencherNomeMedicamento).type('medicamento{downarrow}{enter}')
        cy.get(el.preencherPosologia).type('Vacina {downarrow}{enter}')
        cy.get(el.preencherDuracaoTratamento).type('5')
        cy.get(el.preencherObservacao).type('Automatizadoh')
        cy.get(el.preencherNomeLocalAtendimento).type('Santa Marta{downarrow}{enter}')
        cy.get(el.botaoSalvarMedicamento).click()
        cy.get(el.botaoSalvar).click({force : true})
        cy.get(el.mensagemSucesso).contains('Registro salvo com sucesso!')

        

    }



}

export default new CadastrarReceitaSimples ();