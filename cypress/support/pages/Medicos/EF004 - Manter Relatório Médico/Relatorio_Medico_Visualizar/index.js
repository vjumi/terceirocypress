//ações de interação com a página

const el = require ('./elements').ELEMENTS
class PrescricaoVisualizarRelatorioMedico{



    PrescricaoVisualizarRelatorioMedico(){

    cy.wait(1000)
    cy.get(el.botaoVisualizar).click({ force: true })
    cy.get('.embed-responsive > .col-sm-12')

    cy.request(el.validarRequisicao200).then((response) => {
      expect(response.status).to.eq(200)
  
      })  
 

      
  }


}

export default new PrescricaoVisualizarRelatorioMedico ();