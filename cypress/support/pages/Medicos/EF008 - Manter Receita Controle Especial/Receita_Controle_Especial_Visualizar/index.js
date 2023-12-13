//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaControleEspecialVisualizar{


    
    ReceitaControleEspecialVisualizar(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        
        cy.get(el.selecionarMinhasPrescricoesMenu).click()
        cy.get(el.selecionarAbaControleEspecial).click()

        cy.get(el.preencherNomeCPF).type('05604179183')

        cy.get(el.botaoVisualizar).click()
        cy.wait(2000)
        cy.get(el.visualizarPDF)
        cy.wait(1000)

        

    }
}

export default new ReceitaControleEspecialVisualizar ();