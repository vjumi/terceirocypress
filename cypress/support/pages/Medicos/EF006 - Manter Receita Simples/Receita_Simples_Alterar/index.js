//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaSimplesAlterar{

    ReceitaSimplesAlterar(){

        
        cy.get(el.cpf).type('Lucas Aguiar')
        cy.get(el.situacao).select('Não Assinado')
        cy.wait(1500)
        cy.get(el.botaoAlterar).click({force:true})

    

        cy.get(el.botaoAlterarMedicamento).click()
        cy.get(el.preencherNomeMedicamento).clear().type('medicamento{downarrow}{enter}')
        cy.get(el.preencherPosologia).clear().type('Vacina {downarrow}{enter}')
        cy.get(el.preencherDuracaoTratamento).clear().type('5')
        cy.get(el.preencherObservacao).clear().type('Automatizadoh')
        cy.get(el.botaoSalvarAlteracoesMedicamento).click()
        //cy.get(el.preencherNomeLocalAtendimento).clear().type('CFM{downarrow}{enter}')

        cy.get(el.botaoSalvarAlteracoesTodas).click()
        cy.get(el.mensagemSucesso).contains('Registro salvo com sucesso!')




    }
    



}

export default new ReceitaSimplesAlterar ();