//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaControleEspecialGerarPDF{


    
    ReceitaControleEspecialGerarPDF(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        
        cy.get(el.selecionarMinhasPrescricoesMenu).click()
        cy.get(el.selecionarAbaControleEspecial).click()

        cy.get(el.preencherNomeCPF).type('05604179183')

        cy.get(el.botaoGerarPDF).click()
        cy.wait(2000)

        cy.request(el.validarRequisicao200).then((response) => {
            expect(response.status).to.eq(200)
        
        })  


        

    }
}

export default new ReceitaControleEspecialGerarPDF ();