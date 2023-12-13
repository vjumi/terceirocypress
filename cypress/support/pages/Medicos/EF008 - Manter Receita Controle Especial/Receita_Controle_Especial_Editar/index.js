//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaControleEspecialEditar{


    
    ReceitaControleEspecialEditar(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        
        cy.get(el.selecionarMinhasPrescricoesMenu).click()
        cy.get(el.selecionarAbaControleEspecial).click()

        cy.get(el.preencherNomeCPF).type('05604179183')

        cy.get(el.botaoEditar).click()
        cy.wait(1500)

        cy.get(el.botaoEditarMedicamento).click()
        cy.get(el.preencherDose).clear().type('2')
        cy.get(el.preencherDuracao).clear().type('3')
        cy.get(el.preencherNomeMedicamento).clear().type('uso oral{downarrow}{enter}')
        cy.get(el.preencherPosologia).clear().type('dipirona{downarrow}{enter}')
        cy.get(el.preencherObservacao).clear().type('Automacao edicao')
        cy.get(el.botaoSalvarAlteracoesMedicamento).click()

        cy.get(el.preencherLocalAtendimento).clear().type('CFM{downarrow}{enter}')
        cy.get(el.botaoSalvarControleEspecial).click()
        cy.get(el.mensagemConfirmação).contains('Registro salvo com sucesso!')





    }
}

export default new ReceitaControleEspecialEditar ();