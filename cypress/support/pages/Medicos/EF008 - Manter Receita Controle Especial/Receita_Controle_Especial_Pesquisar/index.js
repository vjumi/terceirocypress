//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaControleEspecialPesquisar{


    
    ReceitaControleEspecialPesquisar(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        
        cy.get(el.selecionarMinhasPrescricoesMenu).click()
        cy.get(el.selecionarAbaControleEspecial).click()

        cy.get(el.preencherNomeCPF).type('05604179183')
        cy.get(el.preencherLocalAtendimento).type('CFM')
        cy.get(el.preencherSitucacao).select('Não Assinado')

        cy.get(el.validaGridLocalAtendimento).contains('CFM')
        cy.get(el.validaGridNome).contains('Guilherme Cancado')
        cy.get(el.validaGridSituacao).contains('Não Assinado')
        

    }
}

export default new ReceitaControleEspecialPesquisar ();