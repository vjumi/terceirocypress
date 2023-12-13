//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaControleEspecialCadastrar{


    
    ReceitaControleEspecialCadastrar(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        
        cy.get(el.selecionarMinhasPrescricoesMenu).click()
        cy.get(el.selecionarAbaControleEspecial).click()
        cy.get(el.botaoNovaReceitaControleEspecial).click()
        cy.wait(1500)

        cy.get(el.preencherPaciente).type('056.041.791-83{downarrow}{enter}')
        cy.get(el.preencherNomeMedicamento).type('medicamento{downarrow}{enter}')
        cy.get(el.preencherPosologia).type('uso oral{downarrow}{enter}')
        cy.get(el.preencherDuracao).type('3')
        cy.get(el.preencherDose).type('2')
        cy.get(el.preencherObservacao).type('Miau')

        cy.get(el.botaoSalvarAlteracoesMedicamento).click()

        cy.get(el.preencherLocalAtendimento).type('CFM{downarrow}{enter}')
        cy.get(el.botaoSalvar).click()

        cy.get(el.msgAlerta).contains('Registro salvo com sucesso!')
        
        

    }
}

export default new ReceitaControleEspecialCadastrar ();